
const cleverbot = require("cleverbot.io");
const {Client} = require("discord.js");
const settings = require("./settings.json")
var bot = new cleverbot(settings.capi.id,settings.capi.token);
bot.setNick("Test")
let dbot = new Client();
bot.create(() => {});
dbot.on("ready", () => console.log("Ready"));
dbot.on("message",async m => {
  if(m.author.bot)return;
  if(m.isMentioned(m.guild.me)){
    let mes = await m.reply("Processing...");
    let s = m.content.replace(/<@\d{18}>/g, "").trim();
    bot.ask(s, (err, response) => {
      mes.edit(m.author + ", " + response);
  });
  }
})
dbot.login(settings.token)