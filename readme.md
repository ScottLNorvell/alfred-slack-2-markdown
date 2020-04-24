# alfred-slack-2-markdown

> Slack emojis to markdown

An alfred plugin that allows you to use your custom slack emojis from your organization in markdown.

This is excellent for extending slack fun to places where markdown is supported (like github!)

Turns a slack emoji like this one:

![maracasparrot](https://emoji.slack-edge.com/T024K2ND8/maracasparrot/8b9f329f0b958fbb.gif)

Into a usable string:

```markdown
![maracasparrot](https://emoji.slack-edge.com/T024K2ND8/maracasparrot/8b9f329f0b958fbb.gif)
```

Copying into your clipboard and pasting into the focused window!

## Install

You can install from the [latest release](https://github.com/ScottLNorvell/alfred-slack-2-markdown/releases/tag/v0.2.0).

*Requires [Node.js](https://nodejs.org) 10+ and the Alfred [Powerpack](https://www.alfredapp.com/powerpack/).*

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

> NOTE: it takes kind of a long time the first time you do it. (assuming you have a lot of emojis in your org)



## License

MIT © [Scott Norvell](http://scottlnorvell.com)
