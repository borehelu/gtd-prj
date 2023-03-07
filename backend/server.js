const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const apiRoutes = require("./routes/index");
const createError = require("http-errors");

const app = express();

app.use(cors({credentials:true}));
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Get things done api");
});

app.use("/api/v1", apiRoutes);

app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("listening on port 5000");
});
