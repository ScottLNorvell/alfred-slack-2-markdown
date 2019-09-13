'use strict';
require('dotenv').config();
const alfy = require('alfy');
const { WebClient } = require('@slack/web-api');



const getUrl = (value, emojis) => {
	if (/alias:/.test(value)) {
		return emojis[value.split(':')[1]];
	}
	return value;
}

const getIconPath = url => {
	const parts = url.split('/');
	const file = parts.pop();
	const folder = parts.pop();
	return `./emojis/${folder}/${file}`;
};

const filterEmoji = (input, emojis) => {
	const matcher = new RegExp(input, 'i');
	return ([k, value]) => matcher.test(k) && !!getUrl(value, emojis);
};

const mapEmoji = emojis => ([name, value]) => {
	const url = getUrl(value, emojis);
	return {
		uuid: url,
		title: `:${name}:`,
		subtitle: /gif$/.test(url) ? '(animated)' : '',
		icon: {
			path: getIconPath(url),
		},
		arg: `![${name}](${url})`,
	}
};

const token = process.env.SLACK_OAUTH_TOKEN;
const web = new WebClient(token);

(async () => {
	const { emoji: allEmojis } = await web.emoji.list();
	const result = Object.entries(allEmojis)
		.filter(filterEmoji(alfy.input, allEmojis))
		.map(mapEmoji(allEmojis));

	alfy.output(result);
})();
