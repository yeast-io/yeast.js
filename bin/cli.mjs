#!/usr/bin/env node

import Bread from '../dist/main.js';


const bread = new Bread({ key: process.env['M_TEAM_API_KEY'] });
// await bread.seed.search({ mode: 'movie', keyword: 'Dune' }).then(console.log);


await bread.member.updateSecurity({ privacy: 'NORMAL' })
  .then(console.log);
