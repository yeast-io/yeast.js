module.exports = {
  require: 'ts-node/register',
  spec: 'src/**/*.spec.ts',
  extension: ['ts'],
  timeout: 10000,
  reporter: 'spec',
  recursive: true,
  exit: true,
  "node-option": [
    "experimental-specifier-resolution=node",
    "loader=ts-node/esm"
  ]
};
