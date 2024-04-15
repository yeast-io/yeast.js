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

  public async search(program: Command) {
    program
      .command('search')
      .description('To list the latest movies of M-Team')
      .option('-t, --tag <tag>', 'Only 4K | Movies | TV | Adult are supported', '4K')
      .option('-l, --limit [limit]', 'To set a limitation of how many movies that you want to list','50')
      .action(async (options) => {
        const tags = {
          '4k': 'normal', 'movie': 'movie',
          'tv': 'tvshow', 'adult': 'adult'
        };
        const tag = String((options.tag || '').toLowerCase());
        if (!Object.keys(tags).includes(tag)) {
          return program.outputHelp({ error: true });
        }


        const search = new Search();
        // @ts-expect-error . . . . . . . . . . . . .
        await search.movies(tags[tag], parseInt(options.limit))
      });
  }

  public async peers(program: Command) {
    program
      .command('peers <torrentId>')
      .description('To list the peers of the torrent')
      .action(async (torrentId) => {
        const search = new Search();
        await search.peers(parseInt(torrentId));
      });
  }
}


export default BuildInternalCommands;
