import Search from './search.js';
import Member from './member.js';
import { Command } from 'commander';
import { Config } from './config.js';

const config = new Config();
const search = new Search(config.loadConfig());
const member = new Member(config.loadConfig());

class BuildInternalCommands {

  public async config(program: Command) {

    const cmd = program
      .command('config')
      .description('setup config')


    cmd
      .command('site')
      .description('add site config')
      .option('-k, --key <key>', 'set key')
      .option('-u, --url [url]', 'set url')
      .action((options) => {
        if (!options.key) {
          return cmd.help({ error: true });
        }

        config.site(options.key, options.url).save();
      });

    cmd
      .command('bittorrent')
      .description('add bittorrent config')
      .option('-u, --username <username>', 'set username')
      .option('-p, --password <password>', 'set password')
      .option('-l, --url [url]', 'set url')
      .action((options) => {
        if (!options.username || !options.password) {
          return cmd.help({ error: true });
        }

        config.bittorrent(options.username, options.password, options.url).save();
      });

    cmd
      .command('list', { isDefault: true })
      .description('show the configuration')
      .action(() => config.show());
  }

  public async search(program: Command) {
    const cmd = program
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

        await search.movies(tags[tag] as any, options.keyword || null, parseInt(options.limit))
      });

    cmd.command('packages')
      .description('Only output the big packages')
      .action(async () => {
        await search.packages();
      });
  }

  public async peers(program: Command) {
    program
      .command('peers <torrentId>')
      .description('show the peers')
      .action(async (torrentId) => {
        await search.peers(parseInt(torrentId));
      });
  }


  public async labState(program: Command) {
    program
      .command('lab:show')
      .description('show the states of laboratory')
      .action(async () => {
        await member.show();
      });
  }

  public async labSwitch(program: Command) {
    const cmd = program
      .command('lab:switch')
      .description('Switch the laboratory state');


    cmd.command('on')
      .description('turn on the laboratory state')
      .action(async () => {
        await member.switch('ON');
      });

    cmd.command('off')
      .description('turn off the laboratory state')
      .action(async () => {
        await member.switch('OFF');
      });
  }
}


export default BuildInternalCommands;
