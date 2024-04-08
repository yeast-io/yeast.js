import { Command } from 'commander';

class BuildInternalCommands {


  public normal(program: Command) {
    program
      .command('4k')
      .description('to list the latest movies which is under 4k tab')
      .arguments('<limit> [order]')
      .action((limit, order) => {
        console.info(limit, order);
      });

    return this;
  }
}


export default BuildInternalCommands;
