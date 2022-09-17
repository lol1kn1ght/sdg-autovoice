import { command_type } from 'types';

type commandType = {
  [k: string]: { command: command_type; callback: callbackType };
};

type callbackType = () => void | Promise<void>;

class CommandsLoader {
  private _commandsList: commandType = {};

  load(settings: command_type, callback: callbackType) {
    this._commandsList[settings.data.name] = {
      callback,
      command: settings,
    };

    console.log(settings);
    console.log(this._commandsList);
  }
}

export const commandsLoader = new CommandsLoader();
