

class MissingArgumentError extends Error {
  constructor(argumentName: string) {
    super(`Missing argument: ${argumentName}`);
    this.name = 'MissingArgumentError';
  }
}


class UnimplementedMethodError extends Error {
  constructor(methodName: string) {
    super(`Method ${methodName} is not implemented yet`);
    this.name = 'UnimplementedMethodError';
  }
}

class DuplicatedMethodError extends Error {
  constructor(names: string[]) {
    super(`Duplicate methods: ${names.join(', ')}`);
    this.name = 'DuplicatedMethodError';
  }
}

export {
  MissingArgumentError, UnimplementedMethodError,
  DuplicatedMethodError
}
