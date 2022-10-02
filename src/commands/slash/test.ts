import { Slash } from '@/decorators';

class TestBuilder {
  constructor() {
    console.log('TestBuilder Constructed!');
  }
}

@Slash({
  data: {
    name: 'give-money',
    description: 'Give money to somebody',
    options: [
      {
        name: 'amount',
        description: 'amount of cash',
        type: 3,
      },
    ],
  },
})
class Command {
  constructor() {
    this.execute();
  }

  execute() {
    console.log('Executed!');

    new TestBuilder();
  }
}
