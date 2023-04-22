const getBooleanValue = (value) => {
  if (value === 1) return true;
  if (value === "true") return true;
  return false;
};

module.exports = {
  getBooleanValue,
};
