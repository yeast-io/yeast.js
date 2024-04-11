import { Command } from 'commander';
import { loadConfig, addConfig, updateConfig, outputConfig } from './config.js';
import { Buffer } from 'node:buffer';
import Search from './search.js';


const DEFAULT_URL = Buffer.from('aHR0cHM6Ly90cC5tLXRlYW0uY2M=', 'base64').toString('utf-8');

class BuildInternalCommands {

  public async config(program: Command) {

    const config = program
      .command('config')
      .description('the sub-command [config] is used to manage the configuration of M-Team');


    config
      .command('add')
      .description('to add the configuration of M-Team, otherwise, it will override the existing one')
      .option('-k, --key <key>', 'to set the key of M-Team')
      .option('-u, --url [url]', 'to set the url of M-Team', DEFAULT_URL)
      .action((options) => {
        if (!options.key) {
          return config.help({ error: true });
        }

        addConfig(options.key, options.url);
      });

    config
      .command('update')
      .description('to update the configuration of M-Team')
      .option('-k, --key <key>', 'To set the key of M-Team')
      .option('-u, --url [url]', 'To set the url of M-Team')
      .action((options) => {
        if (!options.key) {
          return config.help({ error: true });
        }

        updateConfig(options.key, options.url || DEFAULT_URL);
      });

    config
      .command('list', { isDefault: true })
      .description('this is the default command to list the configuration of M-Team')
      .action(() => outputConfig(loadConfig()));
  }

  public async normal(program: Command) {
    program
      .command('4k')
      .description('To list the latest movies which is under 4k tab')
      .option('-l, --limit [limit]', 'To set a limitation of how many movies that you want to list','50')
      .action(async (options) => {
        const search = new Search();
        const movies = await search.movies('normal', parseInt(options.limit));
        search.output(movies);
      });
  }
}


export default BuildInternalCommands;
