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
  };

  return rules[validationName];
};

module.exports = validationFetch;
