class HttpError extends Error {
  statusCode;
  data;

  constructor(message, statusCode, errorData = null) {
    super(message);
    this.statusCode = statusCode;
    this.data = errorData;
  }
}

export { HttpError };
