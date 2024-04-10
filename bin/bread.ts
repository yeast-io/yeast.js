#!/usr/bin/env node

import BuildInternalCommands from './commands/builder.js';
import { Command } from 'commander';
import { initialize } from './commands/config.js';

async function boostrap (): Promise<void> {
  await initialize();
  const program = new Command();
  const builder = new BuildInternalCommands();

  program.name('bread');
  program.description('bread.js is an easy-to-use tool for M-Team.');
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  program.version(require('../package.json').version);

  builder.config(program);
  // to build commands for the navigated tabs
  builder.normal(program);


  program.parse(process.argv);
}


boostrap().then(() => process.exit(0)).catch((err) => {
  console.error(err);
  process.exit(1);
});
