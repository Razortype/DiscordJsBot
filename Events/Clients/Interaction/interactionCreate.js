const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "interactionCreate",
    async execute(interaction, client) {
        if(interaction.isCommand()) {
            const command = client.commands.get(interaction.commandName);
            if(!command) return interaction.reply({embed: [
                new MessageEmbed()
                .setColor("RED")
                .setDescription("⛔️ An error occured while running this command.")
            ]}) && client.commands.delete(interaction.commandName);

            commands.execute(interaction, client);
        }
    }
}