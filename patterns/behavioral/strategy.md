- [El patrón Strategy](#el-patr%C3%B3n-strategy)
  - [Usando el patrón Strategy](#usando-el-patr%C3%B3n-strategy)
  - [Participantes del patrón Strategy](#participantes-del-patr%C3%B3n-strategy)
  - [Ejemplo](#ejemplo)
  - [Ejemplo en vivo](#ejemplo-en-vivo)
  - [Ejemplo de código](#ejemplo-de-c%C3%B3digo)

# El patrón Strategy

Strategy es un patrón de diseño de comportamiento que te permite definir una familia de algoritmos, colocar cada uno de ellos en una clase separada y hacer sus objetos intercambiables.

## Usando el patrón Strategy

Supongamos que nos gustaría probar el rendimiento de diferentes algoritmos de ordenación en un array de números: shell sort, heap sort, bubble sort, quicksort, etc. Aplicar el patrón Strategy a estos algoritmos permite que el programa de prueba recorra todos los algoritmos, simplemente cambiándolos en tiempo de ejecución y probando cada uno de ellos contra el array.

Usar el patrón Strategy aporta varias ventajas:

- Intercambiar algoritmos usados dentro de un objeto durante el tiempo de ejecución.
- Aislar los detalles de implementación de un algoritmo del código que lo utiliza.
- Sustituir la herencia por composición.
- `Principio de open/closed`: Puedes introducir nuevas estrategias sin tener que cambiar el contexto.

## Participantes del patrón Strategy

- `Context`: Mantiene una referencia al objeto de estrategia actual. Soporta la interfaz con el método `setStrategy` que permite permite cambiar la estrategia en tiempo de ejecución.

- `Strategy`: Implementa las acciones de la estrategia utilizando la interfaz Strategy.

## Ejemplo

```typescript
interface Strategy {
  calculate: (p: DeliverablePackage) => string;
}

type DeliverablePackage = {
  from: string;
  to: string;
  weight: string;
};

class Shipping {
  strategy: Strategy | undefined;

  setStrategy(s: Strategy): void {
    this.strategy = s;
  }

  calculate(deliverablePackage: DeliverablePackage): string | null {
    if (!this?.strategy) {
      return null;
    }

    return this.strategy.calculate(deliverablePackage);
  }
}

class UpsStrategy implements Strategy {
  calculate(p: DeliverablePackage): string {
    // calculations...
    return '$45.95';
  }
}

class XpoStrategy implements Strategy {
  calculate(deliverablePackage: DeliverablePackage): string {
    // calculations...
    return '$39.40';
  }
}

class FedexStrategy implements Strategy {
  calculate(deliverablePackage: DeliverablePackage): string {
    // calculations...
    return '$43.20';
  }
}

const deliverablePackage: DeliverablePackage = {
  from: '76712',
  to: '10012',
  weight: 'lkg',
};

// the 3 strategies
const upsStrategy = new UpsStrategy();
const xpoStrategy = new XpoStrategy();
const fedexStrategy = new FedexStrategy();

const shipping = new Shipping();

shipping.setStrategy(upsStrategy);
console.log('UPS Strategy: ' + shipping.calculate(deliverablePackage));

shipping.setStrategy(xpoStrategy);
console.log('XPO Strategy: ' + shipping.calculate(deliverablePackage));

shipping.setStrategy(fedexStrategy);
console.log('Fedex Strategy: ' + shipping.calculate(deliverablePackage));
```

Output

```text
[LOG]: "UPS Strategy: $45.95"
[LOG]: "XPO Strategy: $39.40"
[LOG]: "Fedex Strategy: $43.20"
```

## Ejemplo en vivo

```tsx
interface Strategy {
  calculate: (p: DeliverablePackage) => string;
}

type DeliverablePackage = {
  from: string;
  to: string;
  weight: string;
};

class Shipping {
  strategy: Strategy | undefine...
```

[Playground Link](https://www.typescriptlang.org/play/?#code/JYOwLgpgTgZghgYwgAgMpinSBzAnsgbwChlkE4AbBAVwqwgC5kAKAByYBEILgA3aOACMKEAAqIA1nGwQAlMgC8APmQBnDKGwBuIgF8iRMLlYouPfpmFjJ0lAsIlkMKAHsAtk3VRNO0mBeeGiDajgDuEMDYABZggd7BOro6RAh0qqpoUcCsrJoOpF70eEzomDj4AD7I1CAAJhAwoBC1yQUQYKVFuMyqJRhdsky8LsC1+aTIYFmqAHSF5Ypqvsj6juRUtPTM9eYCVuIIUjKc3Hx7IgdHcnF5VSC0FOOkwDAsAIRTwKoA-HP95fJiBMJlB2tQoCBkPcKBRlqRVsDQWBwZDPrN5hA8DN1jQ6JBtqcLEILjYZLJlvpVqk4OlkABVViqToLYBuVgiNwQcAZZmY-BAsiUXFbdjIMxnSwkw62QZqILYJ7IAD0SsFGzxwBcIFmMxmjlISJRyAA5AASAAsAFYZgBOS3Gil6AzU2kADVYLl5eGQrPZEE53LQ-z54xxm3xOwlxOs0uOYsJ5xjV1lXjyAtIKrVwrAmu1ur1iLBEJNpoAzDaZuaAAwOxyU51pDIAMWaEAAHl78L6OVywDzg96BWG8RACbtJUnbCdx9HLjKbsFFZnh1hczqCyCi5CzebSzMAEw1x1UrXqZCRon7UmMeMzq+xuzjZzuJjGgDsADY3wBGffGgA0jj+K+35VlWv4AWEETRLEJoUBI2CQUkBiZlMKClnKZSYsAECqCkp5gNUjKdosIAQKE9LEQO3Tkvh2qEW2HokfYZEUe6nrUcwtEIARTith21GkeRyAtvUAlYXgXHJDx9FqFkOR5CxwmoPJuTBFJBiqKpmhzO0nbMNQVESbg3Gni4IgzBQLjYMwxp0qIqBBsZr7IAA1HJ2Rqdg2JCuGo4Xomc5krRRBaZ5OmqHpnGMRxxmmdq5kQJZ1m2a6ogAPJOV0LnuWFCnBD56pbAFE5BXIIV5V5ukdJxMD8Z28WqIlyU2caontll5Q5R5+XeSuEYJqV16yLRQA)

## Ejemplo de código

[Example](./strategy.ts)
