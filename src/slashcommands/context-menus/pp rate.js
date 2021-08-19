
import random from 'random';
export const command = {
    name: 'PP Rate',
    type: "USER",
    /**
     * 
     * @param {ContextMenuInteraction} interaction 
     */
    run: async(interaction) => {
        const { user } = interaction.guild.members.cache.get(interaction.targetId);
        const int = random.int(0, 15);
        const e = `8${"=".repeat(int)}D`;
        await interaction.reply({
            content: `${user}'s PP:\n${e}`,
            allowedMentions: {users: []}
        })
    }
}