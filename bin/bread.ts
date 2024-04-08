#!/usr/bin/env node

import { Command } from 'commander';
import BuildInternalCommands from './commands/builder.js';


const builder = new BuildInternalCommands();

async function boostrap (): Promise<void> {
  const program = new Command();

  program.name('bread');
  program.description('bread.js is an easy-to-use tool for M-Team.');
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  program.version(require('../package.json').version);

  // to build commands for the navigated tabs
  builder.normal(program);


  program.parse(process.argv);
}


boostrap().then(() => process.exit(0)).catch(() => process.exit(1));
