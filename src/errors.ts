

class MissingArgumentError extends Error {
  constructor(argumentName: string) {
    super(`Missing argument: ${argumentName}`);
  }
}

export {
  MissingArgumentError
}
