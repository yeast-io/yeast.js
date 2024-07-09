"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const search_js_1 = __importDefault(require("./search.js"));
const member_js_1 = __importDefault(require("./member.js"));
const bittorrent_js_1 = __importDefault(require("./bittorrent.js"));
class BuildInternalCommands {
    configInstance;
    instance = {};
    constructor(configInstance) {
        this.configInstance = configInstance;
        this.instance.config = configInstance;
        this.instance.search = new search_js_1.default(this.instance.config.loadConfig());
        this.instance.member = new member_js_1.default(this.instance.config.loadConfig());
        this.instance.bittorrent = new bittorrent_js_1.default(this.instance.config.loadConfig());
    }
    async config(program) {
        const cmd = program
            .command('config')
            .description('setup config');
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
    async search(program) {
        const cmd = program
            .command('search')
            .description('to help you to search the torrents')
            .option('-t, --tag [tag]', 'Only 4K | Movies | TV | Adult are supported', '4K')
            .option('-l, --limit [limit]', 'Set a limitation of how many movies that you want to list', '50')
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
            await this.instance.search.movies(tags[tag], options.keyword || null, parseInt(options.limit));
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
    async peers(program) {
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
    async labState(program) {
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
    async labSwitch(program) {
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
    async bittorrent(program) {
        program
            .command('qbittorrent <torrentId>')
            .description('add the torrent to the qbittorrent server')
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
exports.default = BuildInternalCommands;
