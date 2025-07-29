/**
 * The Mediator interface declares a method used by components to notify the
 * mediator about various events. The Mediator may react to these events and
 * pass the execution to other components.
 */
interface Mediator {
  logMessage(user: User, message: string): void;
}

/**
 * Concrete Mediators implement cooperative behavior by coordinating several
 * components.
 */
class ChatChannelMediator implements Mediator {
  private pilot: PilotUser;

  private airTrafficController: AirTrafficControllerUser;

  constructor(pilot: PilotUser, airTrafficController: AirTrafficControllerUser) {
    this.pilot = pilot;
    this.pilot.setMediator(this);

    this.airTrafficController = airTrafficController;
    this.airTrafficController.setMediator(this);
  }

  public logMessage(user: User, message: string): void {
    const time = new Date();
    const sender = user.getName();

    if (user instanceof PilotUser) {
      this.airTrafficController.traceConversation(sender, message, time);
    } else if (user instanceof AirTrafficControllerUser) {
      this.pilot.traceConversation(sender, message, time);
    }
  }
}

/**
 * The User class provides the basic functionality of storing a mediator's
 * instance inside user objects.
 */
class User {
  protected mediator: Mediator;

  private name: string;

  constructor(name: string, mediator?: Mediator) {
    this.name = name;
    this.mediator = mediator!;
  }

  public getName(): string {
    return this.name;
  }

  public setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }

  public send(message: string): void {
    this.mediator.logMessage(this, message);
  }
}

class PilotUser extends User {
  public type = 'Pilot';

  constructor(name: string, mediator?: Mediator) {
    super(name, mediator);
  }

  public traceConversation(sender: string, message: string, time: Date): void {
    console.log(`${time} [${sender}]: ${message} - [${this.getName()}]: message received, I'll take care of it`);
  }
}

class AirTrafficControllerUser extends User {
  public type = 'Air Traffic Controller';

  constructor(name: string, mediator?: Mediator) {
    super(name, mediator);
  }

  public traceConversation(sender: string, message: string, time: Date): void {
    console.log(`${time} [${sender}]: ${message} - [${this.getName()}]: oki, I will answer you soon`);
  }
}

const pilot = new PilotUser('John');
const airTrafficController = new AirTrafficControllerUser('Jane');

const chatChannel = new ChatChannelMediator(pilot, airTrafficController);

pilot.send('Hello, I am ready for takeoff!');
airTrafficController.send('Roger that, you are cleared for takeoff!');
