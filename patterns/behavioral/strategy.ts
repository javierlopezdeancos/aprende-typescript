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

// Output
// [LOG]: "UPS Strategy: $45.95"
// [LOG]: "XPO Strategy: $39.40"
// [LOG]: "Fedex Strategy: $43.20"
