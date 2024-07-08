#!/usr/bin/env node

import BuildInternalCommands from './commands/builder.js';
import { Command } from 'commander';
import { Config } from './commands/config.js';

async function boostrap (): Promise<void> {
  const config = new Config();
  config.initialize();

  const program = new Command();
  const builder = new BuildInternalCommands(config);

  program.name('yeast');
  program.description('yeast.js is an easy-to-use tool for M-Team.');

  await builder.config(program);
  await builder.search(program);
  await builder.peers(program);
  await builder.labState(program);
  await builder.labSwitch(program);

  if (!process.argv.slice(2).length) {
    return program.outputHelp({ error: false });
  }

  await program.parseAsync(process.argv);
}


boostrap().then(() => process.exit(0)).catch((err) => {
  console.error(err);
  process.exit(1);
});
