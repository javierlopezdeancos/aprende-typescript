class Publisher<D = string> {
  private subscribers: Subscriber<D>[] = [];

  constructor() {}

  public subscribe(subscriber: Subscriber<D>): void {
    this.subscribers.push(subscriber);
  }

  public unsubscribe(subscriber: Subscriber<D>): void {
    this.subscribers = this.subscribers.filter((s) => s !== subscriber);
  }

  public notify(data: D): void {
    this.subscribers.forEach((s: Subscriber<D>) => {
      s.update(data);
    });
  }
}

interface Subscriber<D = string> {
  update(data: D): void;
}

class SubscriberOne implements Subscriber {
  update(data: string): void {
    console.log('LOG: One has been notified about: ' + data);
  }
}

class SubscriberTwo implements Subscriber {
  update(data: string): void {
    console.info('INFO: Two has been notified about: ' + data);
  }
}

const publisher = new Publisher<string>();

const subscriberOne = new SubscriberOne();
const subscriberTwo = new SubscriberTwo();

publisher.subscribe(subscriberOne);
publisher.subscribe(subscriberTwo);

publisher.notify('Hello World!');

// output =>
// 'One has been notified about: Hello World!'
// 'Two has been notified about: Hello World!'
