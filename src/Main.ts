import 'colors';
import {
  IntentsBitField,
  Client,
  REST,
  Routes,
  GatewayIntentBits,
} from 'discord.js';
import dotenv from 'dotenv';
import { readdirSync } from 'fs';
import './prototypes';

const intents_flags = IntentsBitField.Flags;

export const client = new Client({
  intents: Object.values(intents_flags).filter((intent) =>
    Number(intent)
  ) as number[],
});

import dev_config from '#dev_config';
import prod_config from '#config';

console.log('Setting up env variables');
const envOutput = dotenv.config({
  path: '../.env',
});

const defined_variables = envOutput.parsed
  ? Object.keys(envOutput.parsed)
  : ['None'];
console.group();
console.log(`Defined env variables:`, `${defined_variables.join(', ')}`.green);
console.groupEnd();

console.log('Setted up env variables');
console.log();

export const config = process.env.DEV ? dev_config : prod_config;

class BotBuilder {
  client = client;
  constructor() {
    this._start();
  }

  private async _start() {
    console.log(`Starting Bot...`.green);

    await this._load_commands();
  }

  async _load_commands(): Promise<void> {
    console.group();
    console.log('Loading commands');

    const enabled_modules = Object.keys(config.modules).filter(
      (key) => config.modules[key as keyof typeof config.modules]
    );
    console.group();
    console.log(`Modules to load: ` + enabled_modules.join(', ').green);
    console.log();

    for (let i = 0; i < enabled_modules.length; i++) {
      const module_name = enabled_modules[i];
      console.log(`Searching module files ${module_name.green}`);

      const commands_folder = readdirSync(`./commands/${module_name}`);

      for (let i = 0; i < commands_folder.length; i++) {
        console.group();
        const file = commands_folder[i];
        const file_path = `./commands/${module_name}/${file}`;
        await import(file_path);
        console.log(`Loaded file: ` + file_path.green);
        console.groupEnd();
      }
    }

    console.log();

    console.groupEnd();
    console.log('Loaded commands');
  }

  async _post_commands(): Promise<void> {}
}

export const Bot = new BotBuilder();
