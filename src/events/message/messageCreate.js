import { Message } from "discord.js";

export const event = {
    name: 'messageCreate',
    once: false,
    /**
     * 
     * @param {Message} message 
     */
    run: async(client, message) => {
        if(!message.guild || message.author.bot || !message.content.startsWith("pro ")) return;
        const [cmd, ...args] = message.content.slice("pro ".length)
            .trim()
            .split(/ +/g);
        
        const command = client.commands.get(cmd);
        if(!command) return;
        command.run(message, args)
    }
}