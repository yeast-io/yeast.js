"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yeast_js_1 = __importDefault(require("yeast.js"));
const table_1 = require("table");
class Member {
    config;
    yeast;
    constructor(config) {
        this.config = config;
        this.yeast = new yeast_js_1.default(config);
    }
    async show() {
        const state = await this.yeast.lab.funcState();
        const headers = ['Adult Group State', 'Adult Mode State'];
        console.info((0, table_1.table)([headers, [state.adultGroup, state.adultMode]]));
    }
    async switch(state) {
        const headers = ['Adult Group State', 'Adult Mode State'];
        if (state === 'ON') {
            await this.yeast.lab.tiggerFunc({ adultGroup: true, adultMode: true });
            const state = await this.yeast.lab.funcState();
            console.info((0, table_1.table)([headers, [state.adultGroup, state.adultMode]]));
        }
        else {
            await this.yeast.lab.tiggerFunc({ adultGroup: false, adultMode: false });
            const state = await this.yeast.lab.funcState();
            console.info((0, table_1.table)([headers, [state.adultGroup, state.adultMode]]));
        }
    }
}
exports.default = Member;
