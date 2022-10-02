import { client } from '@/Main';

type settings_type = {
  once?: boolean;
};
/**@description Региструет класс как событие "messageCreate" для бота */
export function InteractionCreate(seetings?: settings_type) {
  return function <T extends { new (...args: any[]): {} }>(Event: T) {
    if (seetings?.once)
      client.once('messageCreate', (...args: any) => {
        new Event(...args);
      });
    else
      client.on('messageCreate', (...args: any) => {
        new Event(...args);
      });
  };
}
