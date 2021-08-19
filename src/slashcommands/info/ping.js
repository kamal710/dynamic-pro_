export const command = {
    name: 'ping',
    description: "Pong!",
    run: async(interaction) => {
        await interaction.reply(`Pong!`);
    }
}