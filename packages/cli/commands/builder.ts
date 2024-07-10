import Search from './search.js';
import Member from './member.js';
import Bittorrent from './bittorrent.js';
import { Command } from 'commander';
import { Config } from './config.js';


interface IClient {
  search: Search;
  member: Member;
  config: Config;
  bittorrent: Bittorrent;
}


class BuildInternalCommands {

  protected instance: IClient = {} as IClient;

  constructor(protected configInstance: Config) {
    this.instance.config = configInstance;
    this.instance.search = new Search(this.instance.config.loadConfig());
    this.instance.member = new Member(this.instance.config.loadConfig());
    this.instance.bittorrent = new Bittorrent(this.instance.config.loadConfig());
  }

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

        this.instance.config.site(options.key, options.url).save();
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

        this.instance.config.bittorrent(options.username, options.password, options.url).save();
      });

    cmd
      .command('list', { isDefault: true })
      .description('show the configuration')
      .action(() => this.instance.config.show());
  }

  public async search(program: Command) {
    const cmd = program
      .command('search')
      .description('to help you to search the torrents')
      .option('-t, --tag [tag]', 'Only 4K | Movies | TV | Adult are supported', '4K')
      .option('-l, --limit [limit]', 'Set a limitation of how many movies that you want to list','50')
      .option('-k, --keyword [keyword]', 'Keyword for searching torrent')
      .action(async (options) => {
        const err = this.instance.config.check();
        if (err) {
          console.error(err);
          return program.outputHelp({ error: true });
        }
        const tags = {
          '4k': 'normal', 'movie': 'movie',
          'tv': 'tvshow', 'adult': 'adult'
        };
        const tag = String((options.tag || '').toLowerCase());
        if (!Object.keys(tags).includes(tag)) {
          return program.outputHelp({ error: true });
        }

        await this.instance.search.movies(tags[tag] as any, options.keyword || null, parseInt(options.limit))
      });

    cmd.command('packages')
      .description('only output the big packages')
      .action(async () => {
        const err = this.instance.config.check();
        if (err) {
          console.error(err);
          return program.outputHelp({ error: true });
        }
        await this.instance.search.packages();
      });
  }

  public async peers(program: Command) {
    program
      .command('peers <torrentId>')
      .description('show the peers')
      .action(async (torrentId) => {
        const err = this.instance.config.check();
        if (err) {
          console.error(err);
          return program.outputHelp({ error: true });
        }
        await this.instance.search.peers(parseInt(torrentId));
      });
  }


  public async labState(program: Command) {
    program
      .command('lab:show')
      .description('show the state of laboratory')
      .action(async () => {
        const err = this.instance.config.check();
        if (err) {
          console.error(err);
          return program.outputHelp({ error: true });
        }
        await this.instance.member.show();
      });
  }

  public async labSwitch(program: Command) {
    const cmd = program
      .command('lab:switch')
      .description('switch the laboratory state');


    cmd.command('on')
      .description('turn on the laboratory state')
      .action(async () => {
        const err = this.instance.config.check();
        if (err) {
          console.error(err);
          return program.outputHelp({ error: true });
        }
        await this.instance.member.switch('ON');
      });

    cmd.command('off')
      .description('turn off the laboratory state')
      .action(async () => {
        const err = this.instance.config.check();
        if (err) {
          console.error(err);
          return program.outputHelp({ error: true });
        }
        await this.instance.member.switch('OFF');
      });
  }

  public async bittorrent(program: Command) {
    const cmd = program
      .command('qbittorrent')
      .description('add the torrent to the qbittorrent server')

    cmd
      .command('add <torrentId>')
      .action(async (torrentId) => {
        const err = this.instance.config.checkBittorrent();
        if (err) {
          console.error(err);
          return program.outputHelp({ error: true });
        }
        await this.instance.bittorrent.add(torrentId);
      });
  }
}


export default BuildInternalCommands;
