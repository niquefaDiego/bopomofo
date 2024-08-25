

class ValidationError extends Error
{
  constructor (message: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

class AssertionError extends Error
{
  constructor (message: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export { ValidationError, AssertionError };