module.exports = {
  name: "ping",
  description: "Get bots ping and api ping",
  async execute(bot, message, MessageEmbed) {
    let botMsg = await message.channel.send("〽️ Pining");
    const embed = new MessageEmbed()
      .setAuthor(bot.user.tag, bot.user.avatarURL())
      .setThumbnail(bot.user.avatarURL())
      .setTitle("Ping")
      .setTimestamp(message.createdTimestamp)
      .addField(
        "Bots Ping",
        `🏓${Math.round(botMsg.createdAt - message.createdAt)}ms!🏓`
      )
      .addField("API Ping", `🏓${Math.round(bot.ws.ping)}ms!🏓`)
      .setFooter(
        `Requested By: ${message.author.tag}`,
        message.author.avatarURL({ dynamic: true })
      )
      .setColor("RANDOM");

    botMsg.edit(" ", embed);
  },
};