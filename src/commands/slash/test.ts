import { Slash } from '@/decorators';
import { SlashCommandBuilder } from 'discord.js';

@Slash({
  data: new SlashCommandBuilder()
    .setName('test-command')
    .setDescription('test command description'),
})
export class Command {
  async execute() {}

  constructor() {
    console.log('ФАЙЛ СОБРАЛСЯ');
  }

  async aboba() {}
}
