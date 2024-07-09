#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const builder_js_1 = __importDefault(require("./commands/builder.js"));
const commander_1 = require("commander");
const config_js_1 = require("./commands/config.js");
async function boostrap() {
    const config = new config_js_1.Config();
    config.initialize();
    const program = new commander_1.Command();
    const builder = new builder_js_1.default(config);
    program.name('yeast');
    program.description('yeast.js is an easy-to-use tool for M-Team.');
    await builder.config(program);
    await builder.search(program);
    await builder.peers(program);
    await builder.labState(program);
    await builder.labSwitch(program);
    await builder.bittorrent(program);
    if (!process.argv.slice(2).length) {
        return program.outputHelp({ error: false });
    }
    await program.parseAsync(process.argv);
}
boostrap().then(() => process.exit(0)).catch((err) => {
    console.error(err);
    process.exit(1);
});
