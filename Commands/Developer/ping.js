const { CommandInteraction } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Ping",
    permission: "ADMINISTRATOR",

    execute(interaction) {
        interaction.reply({content: "Pong!"})
    }
}