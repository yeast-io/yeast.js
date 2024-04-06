

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



export {
  MissingArgumentError, UnimplementedMethodError
}
