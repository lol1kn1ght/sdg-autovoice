import { SlashDecoratorArgsType, SlashLoaderCommandType } from '#types';

type commands_list_type = {
  [k: string]: SlashLoaderCommandType;
};

class SlashBuilder {
  private _commands_list: commands_list_type = {};

  load(SlashDecorator: SlashLoaderCommandType) {
    this._commands_list[SlashDecorator.payload.data.name] = {
      ...SlashDecorator,
    };
    console.log(this._commands_list);
  }
}

export const SlashLoader = new SlashBuilder();
