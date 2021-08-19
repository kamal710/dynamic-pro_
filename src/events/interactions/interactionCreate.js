import { Interaction } from "discord.js";
import DynamicPro from "../../classes/client.js";

export const event = {
    name: 'interactionCreate',
    /**
     * 
     * @param {DynamicPro} client 
     * @param {Interaction} interaction 
     */
    run: async(client, interaction) => {
        if(interaction.isCommand()) {
            const cmd = interaction.commandName;
            const command = client.slashCommands.get(cmd);
            if(!command) return;
            await command.run(interaction);
        }
        if(interaction.isContextMenu()) {
            const cmd = interaction.commandName;
            const command = client.slashCommands.get(cmd);
            if(!command) return;
            await command.run(interaction);
        }
    }
}