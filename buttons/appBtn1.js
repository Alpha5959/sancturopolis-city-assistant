const {
  ActionRowBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  CommandInteraction,
  Client,
} = require("discord.js");

module.exports = {
  id: "app1",

  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {Config} config
   * @param {DB} db
   */
  run: async (client, interaction, config, db) => {
    const App1Modal = new ModalBuilder()
      .setTitle("Application Form - 1")
      .setCustomId("app1mdl");

    const fullName = new TextInputBuilder()
      .setStyle(TextInputStyle.Short)
      .setRequired(true)
      .setCustomId("fullNameInput")
      .setLabel("What is your full name?")
      .setPlaceholder("i.e: Sajidur Rahman Tahsin")
      .setMinLength(2);

    const YCGive = new TextInputBuilder()
      .setStyle(TextInputStyle.Short)
      .setLabel("How much time can you give?")
      .setRequired(true)
      .setMinLength(1)
      .setPlaceholder("i.e: 1 hour")
      .setCustomId("possibleTime");

    const YkAM = new TextInputBuilder()
      .setStyle(TextInputStyle.Paragraph)
      .setLabel("How much do you know about moderation?")
      .setRequired(true)
      .setMinLength(45)
      .setCustomId("aboutModeration");

    const PM = new TextInputBuilder()
      .setStyle(TextInputStyle.Paragraph)
      .setLabel("Have you moderated a server before? How long?")
      .setRequired(true)
      .setCustomId("pastModerating");

    const AU = new TextInputBuilder()
      .setStyle(TextInputStyle.Paragraph)
      .setLabel("How much do you know about us?")
      .setRequired(true)
      .setCustomId("aboutUs");

    const ActionRow1 = new ActionRowBuilder().addComponents(fullName);
    const ActionRow2 = new ActionRowBuilder().addComponents(YCGive);
    const ActionRow3 = new ActionRowBuilder().addComponents(YkAM);
    const ActionRow4 = new ActionRowBuilder().addComponents(PM);
    const ActionRow5 = new ActionRowBuilder().addComponents(AU);

    App1Modal.addComponents(
      ActionRow1,
      ActionRow2,
      ActionRow3,
      ActionRow4,
      ActionRow5
    );

    await interaction.showModal(App1Modal);
  },
};
