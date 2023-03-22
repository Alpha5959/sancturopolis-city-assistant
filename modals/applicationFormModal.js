const { EmbedBuilder } = require("discord.js");
const { colors } = require("discordjs-colors-bundle");
module.exports = {
  id: "app1mdl",
  run: async (client, interaction, config, db) => {
    const fullName = interaction.fields.getTextInputValue("fullNameInput");
    const YCGive = interaction.fields.getTextInputValue("possibleTime");
    const YkAM = interaction.fields.getTextInputValue("aboutModeration");
    const PM = interaction.fields.getTextInputValue("pastModerating");
    const AU = interaction.fields.getTextInputValue("aboutUs");

    const StaffEmbed = new EmbedBuilder()
      .setColor(colors.SeafoamSplash)
      .setTitle(`Trial-Staff Application - ${interaction.user.tag}`)
      .setDescription(
        `${interaction.user.tag} Just published Trial Staff Application. It is now in wait-list. Kindly a recruiter check his submission.`
      )
      .addFields(
        {
          name: "Discord ID and Tag",
          value: `${interaction.user.tag} | ${interaction.user.id}`,
          inline: true,
        },
        { name: "What is your full name?", value: `${fullName}`, inline: true },
        {
          name: "How much time can you give?",
          value: `${YCGive}`,
          inline: true,
        },
        {
          name: "How much do you know about moderation?",
          value: `${YkAM}`,
          inline: true,
        },
        {
          name: "Have you moderated a server before? How long?",
          value: `${PM}`,
          inline: true,
        },
        { name: "How much do you know about us?", value: `${AU}`, inline: true }
      );

    const channelId = "1088089628692713553";

    const AppChannel = client.channels.cache.get(channelId);

    return AppChannel.send({
      embeds: [StaffEmbed],
    });
  },
};
