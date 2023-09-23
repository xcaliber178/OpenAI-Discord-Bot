// IMPORTS
import 'dotenv/config';
import { OpenAI } from 'openai';
import { Client, GatewayIntentBits, REST, Routes } from 'discord.js';

// CREDENTIALS/SETTING
let data = {
    GPT_API_KEY: process.env.GPT_API_KEY,
    DISCORD_BOT_TOKEN: process.env.DISCORD_BOT_TOKEN,
    CLIENT_ID: process.env.CLIENT_ID,
    GPT_MODEL: process.env.GPT_MODEL
};

// DISCORD SETUP
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
  ],
});

// OPENAI SETUP
const openai  = new OpenAI({
  apiKey: data.GPT_API_KEY
});

// BOT COMMANDS
const rest = new REST({ version: '10' }).setToken(data.DISCORD_BOT_TOKEN);
const commands = [
  {
    name: 'gpt',
    description: 'Sends a prompt to GPT.',
    type: 1,
    options: [
      {
        name: 'message',
        description: 'User prompt.',
        type: 3,
        required: true,
      },
    ],
  },
];

// BOT COMMAND REGISTRATION
try {
  console.log('Started refreshing application (/) commands.');
  await rest.put(Routes.applicationCommands(data.CLIENT_ID), { body: commands });
  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}

// COMMAND RESPONSE
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'gpt') {
    console.log('Command received.');
    await interaction.deferReply();
    const userMessage =  await interaction.options.getString('message');
    const response = await generateResponse(userMessage, data.GPT_API_KEY);
    await interaction.editReply(response);
    console.log('Response sent.');
  }
});

// OPENAI
async function generateResponse(prompt) {
  console.log('Asking AI...');
  try {
    const response = await openai.chat.completions.create({
      model: data.GPT_MODEL,
      messages: [{"role": "system", "content": "You are a technical assistant to an IT company."}, {"role": "user", "content": prompt}],
      max_tokens: 1024
      });
    console.log('Answer received.');
    return response.choices[0].message;
  } catch (error) {
    console.error('Error generating response:', error.response ? error.response.data : error);
    return 'Sorry, I am unable to generate a response at this time.';
  }
}

//DISCORD BOT LOGIN
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}.`);
});

client.login(data.DISCORD_BOT_TOKEN);
