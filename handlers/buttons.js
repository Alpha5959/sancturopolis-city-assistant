const fs = require("fs");
const colors = require("colors");

module.exports = (client, config) => {
  console.log("0------------------| Buttons Handler:".blue);

  const buttons = fs
    .readdirSync(`./buttons/`)
    .filter((file) => file.endsWith(".js"));

  for (let file of buttons) {
    let pull = require(`../buttons/${file}`);
    if (pull.id) {
      client.buttons.set(pull.id, pull);
      console.log(`[HANDLER - BUTTONS] Loaded a file: ${file}`.brightGreen);
    } else {
      console.log(
        `[HANDLER - BUTTONS] Couldn't load the file ${file}. Missing button ID.`
          .red
      );
      continue;
    }
  }
};
