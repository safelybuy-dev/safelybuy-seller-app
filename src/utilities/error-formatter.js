export const errorFormatter = (error) => {
  let message = 'UNKNOWN ERROR';
  if (error && error.response && error.response?.data) {
    message = error.response.data;
  }
  if (error instanceof Error) {
    message = error.message;
  }
  return message;
};
