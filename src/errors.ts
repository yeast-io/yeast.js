

class MissingArgumentError extends Error {
  constructor(argumentName: string) {
    super(`Missing argument: ${argumentName}`);
  }
}


class UnimplementedMethodError extends Error {
  constructor(methodName: string) {
    super(`Method ${methodName} is not implemented yet`);
  }
}

class DuplicatedMethodError extends Error {
  constructor(names: string[]) {
    super(`Duplicate methods: ${names.join(', ')}`);
  }
}

export {
  MissingArgumentError, UnimplementedMethodError,
  DuplicatedMethodError
}
