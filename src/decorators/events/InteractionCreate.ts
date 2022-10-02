import { client } from '@/Main';

type settings_type = {
  once?: boolean;
};
/**@description Региструет класс как событие "interactionCreate" для бота */
export function InteractionCreate(seetings?: settings_type) {
  return function <T extends { new (...args: any[]): {} }>(Event: T) {
    if (seetings?.once)
      client.once('interactionCreate', (...args: any) => {
        new Event(...args);
      });
    else
      client.on('interactionCreate', (...args: any) => {
        new Event(...args);
      });
  };
}
