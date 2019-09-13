
require('dotenv').config();
const { WebClient } = require('@slack/web-api');

const token = process.env.SLACK_OAUTH_TOKEN;

const web = new WebClient(token);

(async () => {
  const { emoji } = await web.emoji.list();

  // `res` contains information about the posted message
  console.log('HERE IT IS ->', emoji);
})();
