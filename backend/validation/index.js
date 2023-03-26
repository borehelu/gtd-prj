const {
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
  createCalendar,
} = require("./rules");

const validationFetch = (validationName) => {
  const rules = {
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
    createCalendar,
  };

  return rules[validationName];
};

module.exports = validationFetch;
