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
      .option('-u, --url [url]', 'set url')
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
    const search = program
      .command('search')
      .description('The command "search" will help you to search the torrent')
      .option('-t, --tag [tag]', 'Only 4K | Movies | TV | Adult are supported', '4K')
      .option('-l, --limit [limit]', 'Set a limitation of how many movies that you want to list','50')
      .option('-k, --keyword [keyword]', 'Keyword for searching torrent')
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
        await search.movies(tags[tag], options.keyword || null, parseInt(options.limit))
      });

    search.command('packages')
      .description('Only output the big packages')
      .action(async () => {
        const search = new Search();
        await search.packages();
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
