const validationFetch = require("../validation");
const createError = require('http-errors');
const { validationResult } = require("express-validator");

const validate = (validationName) => {
  const rules = validationFetch(validationName);
  return [
    ...rules,
    (req, res, next) => {
      const errors = validationResult(req);
      const resErrorMsg = {};
      errors.array().forEach((error) => {
        resErrorMsg[error.param] = error.msg;
      });
      if (!errors.isEmpty()) {
        // res.status(400).json({ errors: resErrorMsg });
        next(createError.BadRequest(resErrorMsg));
      }
      next();
    },
  ];
};

module.exports = validate;
