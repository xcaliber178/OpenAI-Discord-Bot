# Discord GPT-4 Chatbot
This repository contains a Discord chatbot powered by OpenAI's GPT models. It allows you to interact with the AI model within a Discord server. The chatbot listens to commands by users and replies using a GPT model, making it a great addition to any server for fun, engaging, and informative conversations. You can define which model to use in the .env file.

![image](https://user-images.githubusercontent.com/37600872/226459308-6de92a4e-7665-4a35-9b06-a87d84deae63.png)

<a href="https://github.com/aaronmansfield5/Discord-GPT-4-Chatbot/issues">![Issues](https://img.shields.io/github/issues/aaronmansfield5/Discord-GPT-4-Chatbot?style=flat)</a>

## Prerequisites
- <a href="https://nodejs.org/">![](https://img.shields.io/badge/Node.js-v14.0%2B-brightgreen)</a>
- <a href="https://www.npmjs.com/">![](https://img.shields.io/badge/npm-v6.0%2B-blue)</a>
- <a href="https://discord.com/">![](https://img.shields.io/badge/Discord%20Account-Required-red)</a>
- <a href="https://github.com/aaronmansfield5/Discord-GPT-4-Chatbot#discord-bot-token">![](https://img.shields.io/badge/Discord%20Bot%20Token-Required-red)</a>
- <a href="https://github.com/aaronmansfield5/Discord-GPT-4-Chatbot#openai-api-key">![](https://img.shields.io/badge/OpenAI%20API%20Token-Required-red)</a>

## Installation
1. Clone the repository:
```bash
git clone https://github.com/xcaliber178/OpenAI-Discord-Bot.git
cd OpenAI-Discord-Bot
```

2. Install the required dependencies:
```javascript
npm install discord.js dotenv openai
```

3. Create a .env file in the project root directory and add your Discord bot token and OpenAI API key:
```makefile
GPT_MODEL="your_openai_model" #gpt-3.5-turbo
GPT_API_KEY="your_openai_api_key"
DISCORD_BOT_TOKEN="your_discord_bot_token"
CLIENT_ID="your_discord_bot_app_id"

```
Replace `your_openai_api_key` and `your_discord_bot_token` with your actual OpenAI API key and Discord bot token.

## Obtaining Tokens

### Discord Bot Token
1. Go to the [**Discord Developer Portal**](https://discord.com/developers/applications) and log in with your Discord account.
2. Click the "New Application" button and give your application a name.
3. Go to the "Bot" tab and click the "Add Bot" button. Confirm by clicking "Yes, do it!".
4. Under the "Bot" tab, you can see the bot's token. Click the "Copy" button to copy the token.

### OpenAI API Key
1. Go to the [**OpenAI Platform**](https://platform.openai.com/signup) and sign up for an account or log in if you already have one.
2. Once logged in, go to the [**API keys**](https://platform.openai.com/account/api-keys) section.
3. Generate a new API key or use an existing one.

## Running the Bot
1. Start the bot by running:
```css
node main.js
```
2. Invite the bot to your Discord server using the invite link provided by the Discord Developer Portal.

3. Once the bot is online, it will start listening to messages and respond using GPT-4.

## Contributing
Feel free to submit issues or pull requests if you find any problems or have suggestions for improvements. Contributions are welcome and appreciated!

<div align="center">

[![Stargazers repo roster for @aaronmansfield5/Discord-GPT-4-Chatbot](https://reporoster.com/stars/dark/aaronmansfield5/Discord-GPT-4-Chatbot)](https://github.com/aaronmansfield5/Discord-GPT-4-Chatbot/stargazers)
[![Forkers repo roster for @aaronmansfield5/Discord-GPT-4-Chatbot](https://reporoster.com/forks/dark/aaronmansfield5/Discord-GPT-4-Chatbot)](https://github.com/aaronmansfield5/Discord-GPT-4-Chatbot/network/members)

<div>
