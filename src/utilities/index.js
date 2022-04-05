module.exports.formatErrorResponse = (array) => {
  let error = '';
  array.forEach((value, key) => {
    error = `${error + value}\n`;
  });
  return error;
};
