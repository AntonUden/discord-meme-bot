const Discord =     require('discord.js');
const randomPuppy = require('random-puppy');
const config =      require('./config.json');

const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if(msg.author.bot) {
		return;
	}

	if(msg.content.toLowerCase() == config.command.toLowerCase()) {
		console.log(msg.author.username + " requested a meme in " + msg.channel.name);
		randomPuppy(config.meme_source_subreddit).then(url => {
			console.log(url);
			msg.channel.send("", {
				files: [url]
			});
		});
	}	
});

client.login(config.discord_token);