const { createItem, updateItem, deleteItem, getItem } = require("../database");

const {
  hashPassword,
  comparePassword,
  getAccessToken,
  getRefreshToken,
  verifyToken,
  sendMail,
} = require("../utilities");

const createError = require("http-errors");
const moment = require("moment");

class UserController {
  static async signUp(req, res, next) {
    const { first_name, last_name, email, password } = req.body;
    const created_at = moment().format("YYYY-MM-DD HH:mm:ss");
    const hashedPassword = await hashPassword(password);
    const user = {
      first_name,
      last_name,
      email,
      password: hashedPassword,
      created_at,
    };

    try {
      const { error, result } = await getItem("users", { email });
      console.log(result);
      if (error) throw new Error(error.message);
      if (result.length > 0)
        return next(createError.Conflict("User already exists"));

      const { error: err } = await createItem("users", user);
      if (err) throw new Error(err.message);
      return res.status(201).json({ message: "User created successfully" });
    } catch (err) {
      console.log(err);
      next(createError.InternalServerError("Error creating user!"));
    }
  }

  static async signIn(req, res, next) {
    const { email, password } = req.body;

    try {
      const { error, result } = await getItem("users", { email });
      if (error) throw new Error(error);
      if (result.length == 1) {
        let match = await comparePassword(password, result[0].password);
        if (match) {
          let accessToken = getAccessToken({
            first_name: result[0].first_name,
            last_name: result[0].last_name,
            email: result[0].email,
            userId: result[0].id,
          });
          let refreshToken = getRefreshToken({
            first_name: result[0].first_name,
            last_name: result[0].last_name,
            email: result[0].email,
            userId: result[0].id,
          });

          const { error: e, result: r } = await updateItem(
            "users",
            {
              id: result[0].id,
            },
            {
              refresh_token: refreshToken,
            }
          );
          if (e) throw new Error(e);
          res.cookie("jwt", refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
          });
          res.status(200).json({ accessToken });
        } else {
          return next(createError.Unauthorized("Invalid email or password."));
        }
      }
      return next(createError.Unauthorized("Invalid email or password."));
    } catch (e) {
      console.log(e);
      next(createError.InternalServerError("Server error."));
    }
  }

  static async refreshToken(req, res, next) {
    const cookies = req.cookies;
    res.clearCookie("jwt", { httpOnly: true });
    try {
      if (cookies?.jwt) {
        const { jwt } = req.cookies;
        const { error, result } = await getItem("users", {
          refresh_token: jwt,
        });
        if (error) throw new Error(error);
        const decoded = verifyToken(result[0].refresh_token);
        if (decoded?.email !== result[0].email) {
          next(createError.Forbidden("Error verifying token"));
        }

        let accessToken = getAccessToken({
          first_name: result[0].first_name,
          last_name: result[0].last_name,
          email: result[0].email,
          userId: result[0].id,
        });
        let refreshToken = getRefreshToken({
          first_name: result[0].first_name,
          last_name: result[0].last_name,
          email: result[0].email,
          userId: result[0].id,
        });
        const { error: e, result: r } = await updateItem(
          "users",
          {
            id: result[0].id,
          },
          {
            refresh_token: refreshToken,
          }
        );
        if (e) throw new Error(e);
        res.cookie("jwt", refreshToken, {
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000,
        });
        return res.status(200).json({ accessToken });
      } else {
        return next(createError.Unauthorized("Refresh token not found!"));
      }
    } catch (e) {
      console.log(e);
      next(createError.InternalServerError("Server error"));
    }
  }

  static async signOut(req, res) {
    const cookies = req.cookies;
    if (cookies?.jwt) {
      const { jwt } = req.cookies;
      const { error, result } = await getItem("users", { refresh_token: jwt });
      if (error) {
        res.clearCookie("jwt", { httpOnly: true });
        return res.sendStatus(204);
      }

      const { error: e, result: r } = await updateItem(
        "users",
        { id: result[0].id },
        {
          refresh_token: "NULL",
        }
      );
      if (e) return res.sendStatus(500);
      res.clearCookie("jwt", { httpOnly: true });
      res.sendStatus(204);
      console.log(cookies);
    } else {
      res.sendStatus(204);
    }
  }

  static async sendPasswordResetEmail(req, res) {
    const email = req.body.email;
    if (!email) return res.status(400).json("Email is required.");
    try {
      const { error, result } = await getItem("users", { email });
      if (error) return sendStatus(500);
      if (result.length === 0)
        return res.status(401).json({ message: "Account not found!" });
      const token = getAccessToken({ email });
      await updateItem("users", { id: result[0].id }, { auth_token: token });
      sendMail(email, token, (info) => {
        console.log("Email sent successfully");
        res.status(200).json({ message: "Email was sent successfully!" });
      });
    } catch (err) {
      res.sendStatus(500);
    }
  }

  static async resetPassword(req, res) {
    const { authorization } = req.headers;
    const { password } = req.body;
    const token = authorization.split(" ")[1];
    const hashedPassword = await hashPassword(password);
    try {
      const { error, result } = await getItem("users", { auth_token: token });
      if (error) res.sendStatus(500);
      if (result.length === 0)
        return res.status(401).json({ message: "Error setting password!" });

      const decoded = verifyToken(token, process.env.ACCESS_TOKEN_SECRET);
      if (decoded.email !== result[0].email)
        return res.status(401).json({ message: "Error setting password!" });

      await updateItem(
        "users",
        { id: result[0].id },
        { password: hashedPassword }
      );
      return res.status(200).json({ message: "Password updated successfully" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error!" });
    }
  }
}

module.exports = UserController;
