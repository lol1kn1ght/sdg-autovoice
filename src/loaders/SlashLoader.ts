import { command_type } from 'types';

type commands_list_type = {
  [k: string]: command_type;
};

export class SlashLoader {
  private _commands_list: commands_list_type = {};

  load(command: command_type) {
    this._commands_list[command.data.name] = command;
  }
}
