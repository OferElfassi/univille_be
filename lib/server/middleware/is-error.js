export const isError = (error, req, res, next) => {
  console.log(error);
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.statusCode || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
};
