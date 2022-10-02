import { SlashDecoratorArgsType, SlashLoaderCommandType } from '#types';
import { SlashLoader } from '@/loaders';
import { CommandInteraction } from 'discord.js';

export function Slash(data: SlashDecoratorArgsType) {
  return function <T extends { new (interaction: CommandInteraction): {} }>(
    Command: T
  ) {
    const loader_args: SlashLoaderCommandType = {
      command: Command,
      payload: data,
    };

    SlashLoader.load(loader_args);
  };
}
