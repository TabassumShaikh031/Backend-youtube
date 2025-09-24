//overriding Error class method
class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    // Error is the parent class.
    // When you call super(message), you’re saying:
    // “Run the constructor of Error with message as the argument.”
    // That’s how properties like .message, .name, and .stack get set up properly by the built-in Error object.
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.errors = errors;
    this.success = false;
    this.data = null;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
