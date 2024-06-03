#!/usr/bin/env node

import BuildInternalCommands from './commands/builder.js';
import { Command } from 'commander';
import { initialize } from './commands/config.js';

async function boostrap (): Promise<void> {
  await initialize();
  const program = new Command();
  const builder = new BuildInternalCommands();

  program.name('yeast');
  program.description('yeast.js is an easy-to-use tool for M-Team.');

  await builder.config(program);
  await builder.search(program);
  await builder.peers(program);
  await builder.labState(program);
  await builder.labSwitch(program);

  await program.parseAsync(process.argv);
}


boostrap().then(() => process.exit(0)).catch((err) => {
  console.error(err);
  process.exit(1);
});
