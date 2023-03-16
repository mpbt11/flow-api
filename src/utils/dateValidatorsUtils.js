const { isValid } = require("date-fns");

const validateDateRange = (start, end) => {
  if (!isValid(new Date(start)) || !isValid(new Date(end))) {
    return false;
  }

  return start <= end;
};

module.exports = {
  validateDateRange,
};
