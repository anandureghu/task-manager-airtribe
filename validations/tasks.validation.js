const httpStatus = require("http-status");

const validateId = (id) => {
  const errors = [];
  if (!id || isNaN(id) || id < 0) {
    errors.push({
      field: "id",
      msg: "invalid id provided",
    });
  }
  return errors;
};

const validateTitle = (title) => {
  const errors = [];
  // required field
  if (!title) {
    errors.push({
      field: "title",
      msg: "required title",
    });
  }

  return errors;
};

const validateDescription = (description) => {
  const errors = [];
  // required field
  if (!description) {
    errors.push({
      field: "description",
      msg: "required description",
    });
  }

  return errors;
};

const valdiateTask = (task) => {
  let errors = [];
  const titleErrors = validateTitle(task.title);
  const descriptionErrors = validateDescription(task.description);
  if (titleErrors.length) errors = [...errors, ...titleErrors];
  if (descriptionErrors.length) errors = [...errors, ...descriptionErrors];
  return errors;
};

module.exports = {
  validateId,
  validateTitle,
  validateDescription,
  valdiateTask,
};
