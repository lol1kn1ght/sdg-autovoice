import { CommandType, command_type } from 'types';

export class Command implements CommandType {
  settings: command_type = {
    data: {
      name: 'test',
      description: 'test command',
    },
    dev_settings: {},
    settings: {},
  };

  async execute() {}

  constructor() {
    console.log('Constructed');
  }

  async aboba() {}
}
