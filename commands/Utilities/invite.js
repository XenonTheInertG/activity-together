const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  name: "invite",
  description: "Invite the bot to your server.",
  botPerms: ["SEND_MESSAGES", "CREATE_INSTANT_INVITE", "EMBED_LINKS"],
    run: async (interaction, client) => {
      await interaction.deferReply({ ephemeral: false });

        const embed = new MessageEmbed()
            .setAuthor("Invite", interaction.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .setColor("#000001")
            .setFooter(`Requested By: ${interaction.user.tag}`, interaction.user.displayAvatarURL())

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel("Invite")
                    .setStyle("LINK")
                    .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`)
                    .setEmoji("🔗")
            )

        interaction.editReply({ embeds: [embed], components: [row] });
    }
}