#!/usr/bin/env node

import Bun from '../dist/main.js';


const bun = new Bun({ key: process.env['M_TEAM_API_KEY'] });
bun.seed.search({ mode: 'movie' }).then(console.log);
