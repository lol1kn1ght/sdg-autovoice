import { command_type } from 'types';

type commands_list = {
  [k: string]: { command: command_type; callback: callbackType };
};

type callbackType = () => void | Promise<void>;

class CommandsLoader {
  private _commands_list: commands_list = {};

  load(settings: command_type, callback: callbackType) {
    this._commands_list[settings.data.name] = {
      callback,
      command: settings,
    };

    console.log(settings);
    console.log(this._commands_list);
  }
}

export const commandsLoader = new CommandsLoader();
