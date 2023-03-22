const {
  EmbedBuilder,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
} = require("discord.js");
const { colors } = require("discordjs-colors-bundle");

module.exports = {
  name: "staff-apply",
  description: "Open a staff application!",
  type: 1,
  options: [],
  permissions: {
    DEFAULT_MEMBER_PERMISSIONS: "Administrator",
  },
  owner: true,
  run: async (client, interaction, config, db) => {
    const Btn1 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("app1")
        .setLabel("Form 1")
        .setStyle(ButtonStyle.Success)
        .setEmoji("📃")
    );

    const app2Btn = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("app2")
        .setLabel("Form 2")
        .setStyle(ButtonStyle.Success)
        .setEmoji("📄")
    );

    const ButtonEmbed = new EmbedBuilder()
      .setColor(colors.VelvetMaroon)
      .setTitle(`Apply for staff`)
      .setDescription(
        `Before submitting your application for **trial-staff**, kindly ensure that you meet the following requirements:\n
        1. **You must have been a member of our server for at least one month.**\n2. **You must not have violated any of our rules.**\n3. **You should have been active on the server.**\n4. **Your age must be over 14.**\n\nIf you meet these requirements, you can proceed with the staff application process. Please note that you are required to complete both forms provided. Failure to do so will result in your application being rejected as we would not have enough information to consider you for the staff position.\n\nThank you.`
      )
      .setFooter({ text: `${interaction.guild.name} Official Bot` })
      .setTimestamp();

    interaction.channel.send({
      embeds: [ButtonEmbed],
      components: [Btn1, app2Btn],
    });
  },
};
