import { Slash } from '@/decorators';
import {
  CommandInteraction,
  PermissionFlagsBits,
  SlashCommandBuilder,
} from 'discord.js';

@Slash({
  data: new SlashCommandBuilder()
    .setName('status')
    .setDescription("Show bot's status")
    .setDefaultMemberPermissions(PermissionFlagsBits.AddReactions)
    .toJSON(),
})
class Command {
  constructor(interaction: CommandInteraction) {
    this.execute(interaction);
  }

  async execute(interaction: CommandInteraction) {
    interaction.editReply("I'm alive!");
  }
}
