const { body, validationResult } = require('express-validator');

const validateProject = [
  body('name').trim().notEmpty().withMessage('Name is required.'),
  body('description').trim().notEmpty().withMessage('Description is required.'),
  body('due_date').notEmpty().withMessage('Due date is required.').isDate().withMessage('Invalid due date format.'),
  body('priority').isIn(['low','medium','high']).withMessage('Invalid priority value.'),
  body('status').isIn(['active', 'completed', 'on hold']).withMessage('Invalid status value.'),
  body('notes').trim()
];

const projectValidationResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(error => error.msg);
    return res.status(400).json({ errors: errorMessages });
  }
  next();
};

module.exports = { validateProject, projectValidationResult };
