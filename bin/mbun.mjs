#!/usr/bin/env node

import Bun from '../dist/main.js';


const bun = new Bun({ key: '' });
bun.seed.doubanInfo('26608246').then(console.log);
