import { Slash } from '/decorators';
import { modules } from '#config';

console.log(modules);

@Slash({
  name: 'Test',
  description: 'Test Command',
})
export class Command {
  async execute() {}

  constructor() {
    console.log('Constructed');
  }

  async aboba() {}
}
