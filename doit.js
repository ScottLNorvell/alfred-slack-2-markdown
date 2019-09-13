
require('dotenv').config();
const { WebClient } = require('@slack/web-api');

const token = process.env.SLACK_OAUTH_TOKEN;

const web = new WebClient(token);

(async () => {
  const result = await web.emoji.list();

  // `res` contains information about the posted message
  console.log('HERE IT IS ->', result);
})();
