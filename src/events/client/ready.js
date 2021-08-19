import DynamicPro from "../../classes/client.js";

export const event = {
    name: 'ready',
    once: true,
    /**
     * 
     * @param {DynamicPro} client 
     */
    run: async(client) => {
        console.log(`Ready`);
        console.log(`Creating slash commands...`);
        const commands = client.slashCommands.reduce((acc, val) => {
            acc.push(val);
            return acc;
        }, [])
        client.application.commands.set(commands, "769965961578807317");
    }
}