#!/usr/bin/env node

const https = require('https');
const login = require('./src/login')

require = require('esm')(module /*, options */);
//require('./src/cli').cli(process.argv);

const options = {
    hostname: 'localhost',
    port: 8765,
    path: '/',
    method: 'GET'
}

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

login.login(process.argv[2], process.argv[3]);
