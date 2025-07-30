export interface Subscriber<D = string> {
  listen(data: D): void;
}

export class Observer<D = string> {
  private subscribers: Subscriber<D>[] = [];

  constructor() {}

  public subscribe(subscriber: Subscriber<D>): void {
    this.subscribers.push(subscriber);
  }

  public unsubscribe(subscriber: Subscriber<D>): void {
    this.subscribers = this.subscribers.filter((s) => s !== subscriber);
  }

  public notify(data: D): void {
    this.subscribers.forEach((subscriber: Subscriber<D>) => {
      subscriber.listen(data);
    });
  }
}

class SubscriberOne implements Subscriber<string> {
  listen(data: string): void {
    console.log('LOG: One has been notified about: ' + data);
  }
}

class SubscriberTwo implements Subscriber<string> {
  listen(data: string): void {
    console.info('INFO: Two has been notified about: ' + data);
  }
}

const subscriberOne = new SubscriberOne();
const subscriberTwo = new SubscriberTwo();

const publisher = new Observer<string>();

publisher.subscribe(subscriberOne);
publisher.subscribe(subscriberTwo);

publisher.notify('Hello World!');

// output =>
// 'One has been notified about: Hello World!'
// 'Two has been notified about: Hello World!'
