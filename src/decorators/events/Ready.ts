import { client } from '@/Main';

type settings_type = {
  once?: boolean;
};
/**@description Региструет класс как событие "ready" для бота */
export function Ready(seetings?: settings_type) {
  return function <T extends { new (...args: any[]): {} }>(Event: T) {
    if (seetings?.once)
      client.once('ready', (...args: any) => {
        new Event(...args);
      });
    else
      client.on('ready', (...args: any) => {
        new Event(...args);
      });
  };
}
