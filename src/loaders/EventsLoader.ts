import { client } from '../Main';

type event_callback = () => Promise<any> | any;

export class EventsLoader {
  load(event_name: string, callback: event_callback) {
    client.on(event_name, callback);
  }
}
