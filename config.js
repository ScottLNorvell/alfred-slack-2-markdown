require('dotenv').config();
const alfy = require('alfy');
const fs = require('fs');

const TOKEN = alfy.input;
fs.writeFileSync('./.env', `SLACK_OAUTH_TOKEN=${TOKEN}`);
