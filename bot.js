const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', m => {
	if (`${m.author.username}#${m.author.discriminator}` === 'AyyBot#9665')
		return;
	console.log(`${m.author.username}#${m.author.discriminator}@${m.channel.guild.name}#${m.channel.name} ${m.content}`);
	const matches = m.content.match(/(ay{2,10})/);
	if (matches)
		m.channel.send('lma' + 'o'.repeat(matches[1].length - 2));
});

bot.login(process.env.TOKEN).catch(() => {
	console.log('Bad token!');
	process.exit()
});