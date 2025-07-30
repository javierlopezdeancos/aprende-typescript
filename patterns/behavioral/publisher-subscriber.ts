export interface Subscriber<D = string> {
  listen(data: D): void;
}

export class Publisher<D = any> {
  private subscribers: Record<string, Subscriber<D>[]> = {};

  public getSubscribers(): Record<string, Subscriber<D>[]> {
    return this.subscribers;
  }

  public subscribe(event: string, subscriber: Subscriber<D>): void {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }

    this.subscribers[event].push(subscriber);
  }

  public publish(event: string, data: D): void {
    const subscribersForEvent = this.subscribers[event];

    console.log(`Publisher is publishing because ${event}`);

    subscribersForEvent?.forEach((subscriber) => {
      subscriber.listen(data);
    });
  }
}

export class SubscriberOne implements Subscriber<string> {
  public listen(data: string): void {
    console.log('Subscriber one has been notified about: ' + data);
  }
}

export class SubscriberTwo implements Subscriber<string> {
  public listen(data: string): void {
    console.log('Subscriber two has been notified about: ' + data);
  }
}

const subscriberOne = new SubscriberOne();
const subscriberTwo = new SubscriberTwo();

const publisher = new Publisher<string>();

publisher.subscribe('event:one', subscriberOne);
publisher.subscribe('event:two', subscriberTwo);

publisher.publish('event:one', 'Hello World!');
publisher.publish('event:two', 'Hello World!');

// Output:
// [LOG]: "Publisher is publishing because event:one"
// [LOG]: "Subscriber one has been notified about: Hello World!"
// [LOG]: "Publisher is publishing because event:two"
// [LOG]: "Subscriber two has been notified about: Hello World!"
