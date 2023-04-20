const httpStatus = require("http-status");

const validateId = (id) => {
  if (!id || isNaN(id) || id < 0) {
    return {
      field: "id",
      msg: "invalid id provided",
    };
  }
  return null;
};

module.exports = {
  validateId,
};
