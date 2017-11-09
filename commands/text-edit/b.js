const { Command } = require('discord.js-commando');

module.exports = class BCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'b',
			aliases: ['🅱'],
			group: 'text-edit',
			memberName: 'b',
			description: 'Replaces b with 🅱.',
			args: [
				{
					key: 'text',
					prompt: 'What text would you like to 🅱?',
					type: 'string',
					validate: text => {
						if (text.replace(/b/gi, '🅱').length < 2000) return true;
						return 'Invalid text, your text is too long.';
					}
				}
			]
		});
	}

	run(msg, { text }) {
		return msg.say(text.replace(/b/gi, '🅱'));
	}
};
