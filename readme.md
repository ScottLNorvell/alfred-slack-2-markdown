# alfred-slack-2-markdown [![Build Status](https://travis-ci.org/scottlnorvell/alfred-slack-2-markdown.svg?branch=master)](https://travis-ci.org/scottlnorvell/alfred-slack-2-markdown)

> Slack emojis to markdown


## Install

```
$ npm install --global alfred-slack-2-markdown
```

*Requires [Node.js](https://nodejs.org) 4+ and the Alfred [Powerpack](https://www.alfredapp.com/powerpack/).*


## Configuration

- Obtain an api token for your slack group with the `emoji:read` permissions. (see [here](https://api.slack.com/methods/emoji.list))
- In alfred type `smdc`, <kbd>Space</kbd>, and then paste in your slack api key.

## Usage

In Alfred, type `smd`, <kbd>Space</kbd>, and then start searching emojis.


## Troubleshooting
### I can't see the pictures 😿
For some reason, alfred can only display images from your computer.
There is an initial setup to download all of the current emojis, and
you will periodically need to download all of the _new_ emojis that your team adds. To do this:

- In Alfred, type `smdu`, <kbd>Space</kbd>
- You'll see a huge screen saying `UPDATED`
- That's it!



## License

MIT © [Scott Norvell](http://scottlnorvell.com)
