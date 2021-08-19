export const command = {
    name: 'ping',
    run: async(client, message, args) => {
        await message.reply(`Pong!`);
    }
}