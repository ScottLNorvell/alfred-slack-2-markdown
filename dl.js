
require('dotenv').config();
const fs = require('fs').promises;
const { WebClient } = require('@slack/web-api');
const download = require('download');

const existing = require('./emojis.json');

const token = process.env.SLACK_OAUTH_TOKEN;

const web = new WebClient(token);

(async () => {
  const { emoji } = await web.emoji.list();

  const promises = Object.entries(emoji)
    .filter(([name, value]) => !existing[name] && !/alias:/.test(value))
    .map(([name, url], i) => {
      const destination = `emojis/${name}`;
      return download(url, destination);
    });

  await Promise.all(promises);
  await fs.writeFile('./emojis.json', JSON.stringify({
    ...existing,
    ...emoji,
  }, null, 2));
})();
