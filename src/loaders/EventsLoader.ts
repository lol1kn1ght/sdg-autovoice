import { event_type } from 'types';
import { client } from '../Main';

type event_callback = () => Promise<any> | any;

type events_list = {
  [k: string]: {
    event: event_type;
    callback: event_callback;
  };
};

export class EventsLoader {
  load(event: event_type, callback: event_callback) {
    client.on(event.name, callback);
  }
}
