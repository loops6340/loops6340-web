import { Client, Intents } from 'discord.js'

export const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

client.on('ready', () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});
client.token = process.env.DISCORD_TOKEN!
