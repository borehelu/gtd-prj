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
  };

  return rules[validationName];
};

module.exports = validationFetch;
