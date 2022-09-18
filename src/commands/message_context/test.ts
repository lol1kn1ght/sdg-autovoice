import { commandsLoader } from '#CommandsLoader';
import { CommandType, command_type } from 'types';

export class Command implements CommandType {
  settings: command_type = {
    data: {
      name: 'test',
      description: 'test command',
    },

    settings: {},
  };

  constructor() {
    console.log('Constructed');
  }

  async execute() {
    this.aboba();
  }

  async aboba() {
    console.log('Aboba');
  }
}

const command = new Command();

commandsLoader.load(command.settings, () => {
  command.execute();
});
