import { MessageEmbed } from "discord.js";

export const command = {
    name: 'avatar',
    type: "USER",
    run: async(interaction) => {
        const {user} = interaction.guild.members.cache.get(interaction.targetId);
        const avatar = user.displayAvatarURL({ dynamic: true });
        const embed = new MessageEmbed({
            image: {
                url: avatar
            }
        })
        await interaction.reply({ embeds:[embed], ephemeral: true });
    }
}