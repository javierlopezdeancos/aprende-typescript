- [El patrón Observador](#el-patr%C3%B3n-observador)
  - [Usando el patrón observador](#usando-el-patr%C3%B3n-observador)
  - [Estructura](#estructura)
  - [Ejemplo](#ejemplo)
  - [Ejemplo en vivo](#ejemplo-en-vivo)
  - [Ejemplo de código](#ejemplo-de-c%C3%B3digo)

# El patrón Observador

Con el patrón observador, podemos suscribir ciertos objetos, los observadores, a otro objeto llamado el observable. ¡Cada vez que ocurre un evento, el observable notifica a todos sus observadores!

Un objeto observable generalmente contiene 3 partes importantes:

- `publisher` o notificador: Envía eventos de interés a otros objetos. Esos eventos ocurren cuando el notificador cambia su estado o ejecuta algunos comportamientos. Los notificadores también contienen una infraestructura de suscripción que permite a nuevos y antiguos suscriptores abandonar la lista.
- `subscribers`: Un array de suscriptores que están suscritos a un notificador que serán notificados cada vez que ocurra un evento específico en el notificador al que están suscritos.
Realizan algunas acciones en respuesta a las notificaciones emitidas por el observable. Todas estas clases deben implementar la misma interfaz de forma que el observable no esté acoplado a clases concretas.
- `subscribe()`: un método para agregar suscriptores a la lista de suscriptores.
- `unsubscribe()`: un método para eliminar suscriptores de la lista de suscriptores.
- `notifySubscribers()`: un método para notificar a todos los suscriptores cada vez que ocurre un evento específico.

Utilizar el patrón Observador aporta varias ventajas:

- Principio de `abierto/cerrado`. Puedes introducir nuevas clases suscriptoras sin tener que cambiar el código de la notificadora (y viceversa si hay una interfaz notificadora).
- Puedes establecer relaciones entre objetos durante el tiempo de ejecución.

## Usando el patrón observador

Puedes experimentar este problema a menudo al trabajar con clases de la interfaz gráfica de usuario. Por ejemplo, si creaste clases personalizadas de botón y quieres permitir al cliente colgar código cliente de tus botones para que se active cuando un usuario pulse un botón.

El patrón Observer permite que cualquier objeto que implemente la interfaz suscriptora pueda suscribirse a notificaciones de eventos en objetos observables o notificadores. Puedes añadir el mecanismo de suscripción a tus botones, permitiendo a los clientes acoplar su código personalizado a través de clases suscriptoras personalizadas.

## Estructura

```mermaid
classDiagram
direction TB
    class Subscriber {
     +update()
    }

    class Publisher {
     - subscribers: Subscriber[]
     +subscribe(subscriber: Subscriber) void
     +unsubscribe(subscriber: Subscriber) void
     +notifySubscribers(data: Data) : void
    }

    class SubscriberOne {
     +update()
    }

    class SubscriberTwo {
     +update()
    }

 <<Class>> Subscriber
 <<Class>> Publisher
 <<Subscriber>> SubscriberOne
 <<Subscriber>> SubscriberTwo

    SubscriberOne --|> Subscriber : Inheritance
    SubscriberTwo --|> Subscriber : Inheritance
    Subscriber --> Publisher : Association
    Publisher ..|> SubscriberTwo : NotifySubscriber
    Publisher ..|> SubscriberOne : NotifySubscriber
```

## Ejemplo

```typescript
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
```

## Ejemplo en vivo

```tsx
class Publisher<D = string> {
  private subscribers: Subscriber<D>[] = [];

  constructor() {}

  public subscribe(subscriber: Subscriber<D>): void {
    this.subscribers.push(subscriber);
  }

  publ...
```

[Playground Link](https://www.typescriptlang.org/play/?#code/MYGwhgzhAEAKCuAjEBLCALApgJwDwBFoBeaCAF2xQDsBzAPmgG8AoaaAB0oDcwzNSkEYJUQ4IALmgBlQcJSi8+OgG0AusWhqA3M1bRgAeyrls8YGQPYAFAEomAX11t2SVMAGIhIzFYizv2JIynnIKBHQ2klwGKAAmTHpsZOhoAHR+IQEQqS4Yvv7yODY6bI56Lsgo7vDGBaL5mYWB0nU44ZHQ0XEJbEkp2RleTTAkyWmDoWKpAGYoIHzWvnZEDDAAhEQkEwHFemXOrlXQVAZkKNMAnlaxvGCS+B1d8Sy90GMDrdjZ05YAomDAdBWXxBT7tYgMF6vUipeDsG58a63Xavewo6COMrUBbTAH8YJDMKELYUaj0HrQOEInwIu7QB5RGKxHRlUCQGAEybYADyVH4KAAtuwQJgBZgqGQOZ8KVTeDTbpITGTHkyKWxDMYDCLUiADDQrAByAAy3IA4pJefx0JBoKJxcdTucUJh4mBEAZ4GRJAboABqaC09GY3RsqAtRoKAAqAHcDNBBcLReLJeHCTgZfC5UiyHSlbQVd0oeqjBAtZhUtQfoaAJIAOQAYtzJDG49aYHaqA6zrMXdA3R6vdAff7AyUMcxWSWyBxDhh0yQ+dG4LOsHg8-RbDpmBryB40zy+RpF6muZbN9up3uuS2j5gl5yAi3z8wKqg59h0q0GvvLbtX2hV0-CMfG2JoW12F8VxwVITm7K4DQACUwEBdWgAB1SwQFiNYDQggB6PDoAHFxpxWZgCKHS1oDbW1MHtWCnV7ftPUkJCULjDDsCwnDyMIg0bxojsu0Y113RY6A2NQzjuINZggA)

## Ejemplo de código

[observer.ts](./observer.ts)
