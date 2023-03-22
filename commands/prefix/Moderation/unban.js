const { EmbedBuilder } = require("discord.js");
const { colors } = require("discordjs-colors-bundle");

module.exports = {
  config: {
    name: "unban",
    description: "Unban a member from the guild",
    usage: "unban [id]",
  },
  permissions: ["BanMembers"],
  owner: false,
  run: async (client, message, args, prefix, config, db) => {
    const userId = args.join(" ");

    if (!userId) {
      return message.reply({ content: `:x: | Please provide a ID to ban! ` });
    }

    const banList = await message.guild.bans.fetch();
    const bannedUser = banList.find((user) => user.id === userId);

    const UnbannedEmbed = new EmbedBuilder()
      .setColor(colors.SeaBlue)
      .setTitle(`Unbanned`)
      .setDescription(`The user is unbanned!`)
      .setTimestamp()
      .setFooter({ text: `${message.guild.name}` });

    if (bannedUser) {
      message.guild.members.unban(userId);
      message.reply({ embeds: [UnbannedEmbed] });
    } else {
      message.reply({ content: `:x: | The mentioned user is not banned!` });
    }
  },
};
