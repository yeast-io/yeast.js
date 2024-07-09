"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const bytes_1 = __importDefault(require("bytes"));
const yeast_js_1 = __importDefault(require("yeast.js"));
const utils_js_1 = require("../utils.js");
const table_1 = require("table");
class Search {
    config;
    yeast;
    headers = ['ID', 'Name', 'Created Time', 'Size/Discount', 'Seeder', 'Leecher'];
    columns = [
        { alignment: 'center', width: 8 },
        { alignment: 'center', width: 80 },
        { alignment: 'center', width: 22 },
        { alignment: 'center', width: 20 },
        { alignment: 'center', width: 8 },
        { alignment: 'center', width: 8 },
    ];
    constructor(config) {
        this.config = config;
        this.yeast = new yeast_js_1.default(config);
    }
    async peers(torrentId) {
        const peers = await this.yeast.seed.peers(torrentId);
        const headers = ['Seeder', 'Leecher'];
        let seeder = 0, leecher = 0;
        for (const peer of peers) {
            if (peer.left === '0') {
                seeder++;
                continue;
            }
            leecher++;
        }
        console.info((0, table_1.table)([headers, [seeder, leecher]], {
            columns: [
                { alignment: 'center', width: 8 },
                { alignment: 'center', width: 8 }
            ]
        }));
    }
    async packages() {
        const mode = 'adult';
        const results = await this.yeast.seed.search({ mode, pageSize: 15, pageNumber: 1, keyword: '' });
        const body = (results.data.map((pkg) => {
            if (pkg.status && pkg.status.toppingLevel < 1) {
                return null;
            }
            const ends = new Date(pkg.status.toppingEndTime).getTime();
            const now = Date.now();
            const diff = ends - now;
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const ts = days > 0 ? `${days} days and ${hours} hours` : `${hours} hours`;
            return [
                pkg.id, `${pkg.name} (End In: ${ts})\n${pkg.smallDescr}`,
                pkg.createdDate,
                (((0, bytes_1.default)(parseInt(pkg.size, 10), { unit: 'gb' })).toUpperCase() + '/' + (pkg.status.discount || 'N/A')),
                pkg.status.seeders, pkg.status.leechers
            ];
        })).filter(el => !(0, utils_js_1.isEmpty)(el));
        body.unshift(this.headers);
        console.info((0, table_1.table)(body, { columns: this.columns }));
    }
    async movies(mode, keyword, limit) {
        keyword = keyword || null;
        limit = limit || 100;
        const options = { mode, pageSize: limit, standards: ['6'] };
        if (keyword) {
            options.keyword = keyword;
        }
        const movies = await this.yeast.seed.search(options);
        movies.data = movies.data.sort((a, b) => {
            return new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime();
        });
        const body = movies.data.map((movie) => {
            return [
                movie.id, movie.name + '\n' + movie.smallDescr, movie.createdDate,
                (((0, bytes_1.default)(parseInt(movie.size, 10), { unit: 'gb' })).toUpperCase() + '/' + (movie.status.discount || 'N/A')),
                movie.status.seeders, movie.status.leechers
            ];
        });
        body.unshift(this.headers);
        console.info((0, table_1.table)(body, { columns: this.columns }));
    }
}
exports.default = Search;
