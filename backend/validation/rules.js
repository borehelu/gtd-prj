const { body } = require("express-validator");

const nameRegex = /^[A-Za-z\-']{2,250}$/;

const createContext = [
  body("name").notEmpty().isString().withMessage("Provide context name").trim(),
];

const createInbox = [
  body("item").notEmpty().isString().withMessage("Provide item").trim(),
];

const createNextActions = [
  body("item_name")
    .notEmpty()
    .isString()
    .withMessage("Provide item name")
    .trim(),
  body("description")
    .notEmpty()
    .isString()
    .withMessage("Provide item description")
    .trim(),
  body("due_date")
    .notEmpty()
    .withMessage("Due date is required.")
    .isDate()
    .withMessage("Invalid due date format."),
  body("priority")
    .isIn(["Low", "Medium", "High"])
    .withMessage("Invalid priority value."),
  body("status")
    .isIn(["Pending", "In progress", "Complete"])
    .withMessage("Invalid status value."),
  body("context_id").notEmpty().withMessage("Context is required."),
];

const createProjects = [
  body("project_name")
    .notEmpty()
    .isString()
    .withMessage("Provide project name")
    .trim(),
  body("description")
    .notEmpty()
    .isString()
    .withMessage("Provide project description")
    .trim(),
  body("outcome")
    .notEmpty()
    .isString()
    .withMessage("Provide project outcome")
    .trim(),
  body("priority")
    .isIn(["Low", "Medium", "High"])
    .withMessage("Invalid priority value."),
  body("status")
    .isIn(["Pending", "In progress", "Complete"])
    .withMessage("Invalid status value."),
  body("due_date")
    .notEmpty()
    .withMessage("Due date is required.")
    .isDate()
    .withMessage("Invalid due date format."),
];

const createProjectTasks = [
  body("task_name")
    .notEmpty()
    .isString()
    .withMessage("Provide task name")
    .trim(),
  body("description")
    .notEmpty()
    .isString()
    .withMessage("Provide task description")
    .trim(),
  body("due_date")
    .notEmpty()
    .withMessage("Due date is required.")
    .isDate()
    .withMessage("Invalid due date format."),
  body("priority")
    .isIn(["Low", "Medium", "High"])
    .withMessage("Invalid priority value."),
  body("status")
    .isIn(["Pending", "In progress", "Complete"])
    .withMessage("Invalid status value."),
  body("context_id").notEmpty().withMessage("Context is required."),
];

const createReference = [
  body("name")
    .notEmpty()
    .isString()
    .withMessage("Provide  name")
    .trim(),
  body("description")
    .notEmpty()
    .isString()
    .withMessage("Provide  description")
    .trim(),
  body("type")
    .isIn(["book", "article", "website"])
    .withMessage("Invalid type value."),
];

const createWaitingFor = [
  body("item_name").notEmpty().isString().withMessage("Provide name").trim(),
  body("description")
    .notEmpty()
    .isString()
    .withMessage("Provide task description")
    .trim(),
  body("contact_name")
    .matches(nameRegex)
    .trim()
    .withMessage(
      "Contact name should be an alphabet between 2 and 250 characters"
    ),
  body("contact_email")
    .notEmpty()
    .isEmail()
    .withMessage("Provide contact Email")
    .trim(),
  body("due_date")
    .notEmpty()
    .withMessage("Due date is required.")
    .isDate()
    .withMessage("Invalid due date format."),
];

const createSomeday = [
  body("item_name").notEmpty().isString().withMessage("Provide name").trim(),
  body("description")
    .notEmpty()
    .isString()
    .withMessage("Provide  description")
    .trim(),
];

const createUser = [
  body("first_name")
    .matches(nameRegex)
    .trim()
    .withMessage(
      "First name should be an alphabet between 2 and 250 characters"
    ),
  body("last_name")
    .matches(nameRegex)
    .trim()
    .withMessage(
      "Last name should be an alphabet between 2 and 250 characters"
    ),
  body("password", "password should be at least 6 characters").isLength({
    min: 6,
  }),
  body("email").notEmpty().isEmail().withMessage("Provide your Email").trim(),
  body("password")
    .not()
    .isEmpty()
    .isString()
    .withMessage("Provide your password")
    .trim(),
];

const loginUser = [
  body("email").notEmpty().isEmail().withMessage("Provide your Email").trim(),
  body("password")
    .not()
    .isEmpty()
    .isString()
    .withMessage("Provide your password")
    .trim(),
];

module.exports = {
  createUser,
  loginUser,
  createContext,
  createInbox,
  createNextActions,
  createProjects,
  createProjectTasks,
  createReference,
  createWaitingFor,
  createSomeday,
};
