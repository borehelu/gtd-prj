const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const template = (token) => {
  return `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <title>Password Reset</title>
                <style>
                .container {
                    width: 100%;
                    height: 100%;
                    padding: 20px;
                    background-color: #f4f4f4;
                }
                .email {
                    width: 80%;
                    margin: 0 auto;
                    background-color: #fff;
                    padding: 20px;
                }
               
                </style>
            </head>
            <body>
                <div class="container">
                <div class="email">
                    <h1>Password Reset</h1>
                    <p>To reset your password click this <a href='http://localhost:3000/password-reset?token=${token}'>link</a></p>
                </div>
                </div>
            </body>
            </html>
`;
};

const sendMail = async (recipient, token, callback) => {
  const options = {
    from: process.env.EMAIL_USER,
    to: recipient,
    subject: "Reset Password",
    html: template(token),
  };
  try {
    const info = await transporter.sendMail(options);
    callback(info);
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendMail;
