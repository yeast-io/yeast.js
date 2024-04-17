import { Command } from 'commander';
import { loadConfig, addConfig, updateConfig, outputConfig } from './config.js';
import { Buffer } from 'node:buffer';
import Search from './search.js';
import Member from './member.js';


const DEFAULT_URL = Buffer.from('aHR0cHM6Ly90cC5tLXRlYW0uY2M=', 'base64').toString('utf-8');

class BuildInternalCommands {

  public async config(program: Command) {

    const config = program
      .command('config')
      .description('setup the configurations')


    config
      .command('add')
      .description('add the configuration')
      .option('-k, --key <key>', 'set key')
      .option('-u, --url [url]', 'set url', DEFAULT_URL)
      .action((options) => {
        if (!options.key) {
          return config.help({ error: true });
        }

        addConfig(options.key, options.url);
      });

    config
      .command('update')
      .description('update the configuration')
      .option('-k, --key <key>', 'set key')
      .option('-u, --url [url]', 'set url')
      .action((options) => {
        if (!options.key) {
          return config.help({ error: true });
        }

        updateConfig(options.key, options.url || DEFAULT_URL);
      });

    config
      .command('list', { isDefault: true })
      .description('show the configuration')
      .action(() => outputConfig(loadConfig()));
  }

  public async search(program: Command) {
    program
      .command('search')
      .description('search medias')
      .option('-t, --tag <tag>', 'only 4K | Movies | TV | Adult are supported', '4K')
      .option('-l, --limit [limit]', 'set a limitation of how many movies that you want to list','50')
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
      .description('show the peers')
      .action(async (torrentId) => {
        const search = new Search();
        await search.peers(parseInt(torrentId));
      });
  }


  public async labState(program: Command) {
    program
      .command('lab:show')
      .description('show the states of laboratory')
      .action(async () => {
        const member = new Member();
        await member.show();
      });
  }

  public async labSwitch(program: Command) {
    const switcher = program
      .command('lab:switch')
      .description('Switch the laboratory state');


    switcher
      .command('on')
      .description('turn on the laboratory state')
      .action(async () => {
        const member = new Member();
        await member.switch('ON');
      });

    switcher.command('off')
      .description('turn off the laboratory state')
      .action(async () => {
        const member = new Member();
        await member.switch('OFF');
      });
  }
}


export default BuildInternalCommands;
