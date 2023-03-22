const { EmbedBuilder } = require("discord.js");

module.exports = {
  config: {
    name: "ban",
    description: "Ban a member",
    usage: "ban [member] [reason]",
  },
  permissions: ["BanMembers"],
  owner: false,
  run: async (client, message, args, prefix, config, db) => {
    const member = message.mentions.members.first();
    if (!args[0])
      return message.reply({ content: `❌ | Please specify someone` });

    if (!member)
      return message.reply({ content: `💤 | Cannot find that member...` });

    if (member.id === message.author.id)
      return message.reply({ content: `❌ | You cannot ban yourself!` });

    if (message.member.roles.highest.position < member.roles.highest.position)
      return message.reply({
        content: `❌ | You cannot ban user who have higher role than you...`,
      });

    if (!member.bannable)
      return message.reply({ content: `❌ | I cannot ban that member` });

    return (
      (await member.ban()) +
      message
        .reply({
          content: `User ${member} has been banned`,
        })
        .then((msg) => {
          setTimeout(() => msg.delete(), 5000);
        })
    );
  },
};
