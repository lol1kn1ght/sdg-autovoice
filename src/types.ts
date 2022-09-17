import { RESTPostAPIApplicationCommandsJSONBody } from 'discord.js';

export type command_settings = {};

export type command_type = {
  dev_settings: command_settings;
  settings: command_settings;
  data: RESTPostAPIApplicationCommandsJSONBody;
};

export abstract class CommandType {
  abstract settings: command_type;

  abstract execute(): Promise<void>;
}
