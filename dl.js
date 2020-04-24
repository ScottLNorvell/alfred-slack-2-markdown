
require('dotenv').config();
const fs = require('fs').promises;
const { WebClient } = require('@slack/web-api');
const download = require('download');

const EMOJI_CACHE_FILE = './.emojis.json';
const token = process.env.SLACK_OAUTH_TOKEN;

const web = new WebClient(token);

(async () => {
  let existing;
  try {
    await fs.stat(EMOJI_CACHE_FILE)
    existing = require(EMOJI_CACHE_FILE);
  } catch (e) {
    existing = {};
  }

  const { emoji } = await web.emoji.list();

  const promises = Object.entries(emoji)
    .filter(([name, value]) => !existing[name] && !/alias:/.test(value))
    .map(([name, url], i) => {
      const destination = `.emojis/${name}`;
      return download(url, destination);
    });

  await Promise.all(promises);
  await fs.writeFile(EMOJI_CACHE_FILE, JSON.stringify({
    ...existing,
    ...emoji,
  }, null, 2));
})();
