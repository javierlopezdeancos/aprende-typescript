# 💎 O - Abierto/Cerrado

Este principio sugiere que *"las entidades de software (clases, módulos y funciones) deben estar abiertas a la extensión, pero cerradas a la modificación"*.

## ❌ Ejemplo erróneo

Esta función no está preparada para extender otra marca en el array de coches, por lo que deberíamos modificarla con otro if en la función `printAveragePriceWrong`.

```ts
class Car {
  private _wheels: string = "4";

  constructor(private _brand: string, private _color?: string) {}

  get brand(): string {
    return this._brand;
  }

  get wheels(): string {
    return this._wheels;
  }

  get color(): string | undefined {
    return this._color;
  }
}

export const cars: Car[] = [
  new Car("Mercedes", "Blue"),
  new Car("Citroen", "Red"),
  new Car("Peugeot", "Yellow")
];

export function printAveragePriceWrong(cars: Car[]): void {
  for (let c = 0; c <= Car.length; c++) {
    const car = cars[c];

    if (car.brand === "Mercedes")
      console.log(18000);
    } else if (car.brand === "Citroen") {
      console.log(25000);
    } else if (car.brand === "Peugeot") {
      console.log(15000);
    }
  }
}
```

## ✔️ Ejemplo correcto

En este caso tenemos dos clases con responsabilidades divididas.
`CarLogger` tiene la responsabilidad de registrar en la consola algunas acciones
del coche inyectado por parámetros.

```ts
class Car {
  private _wheels: string = "4";

  constructor(private _brand: string, private _color?: string) {}

  get brand(): string {
    return this._brand;
  }

  get wheels(): string {
    return this._wheels;
  }

  get color(): string | undefined {
    return this._color;
  }
}

interface IBrandCar extends Car {
  averagePrice: number;
}

class Mercedes extends Car implements IBrandCar {
  private _averagePrice: number = 18000;

  constructor(color?: string) {
    super("Mercedes", color);
  }

  get averagePrice() {
    return this._averagePrice;
  }
}

class Citroen extends Car implements IBrandCar {
  public _averagePrice: number = 25000;

  constructor(color?: string) {
    super("Citroen", color);
  }

  get averagePrice() {
    return this._averagePrice;
  }
}

class Peugeot extends Car implements IBrandCar {
  public _averagePrice: number = 15000;

  constructor(color?: string) {
    super("Peugeot", color);
  }

  get averagePrice() {
    return this._averagePrice;
  }
}

export const brandCars: IBrandCar[] = [
  new Mercedes("Blue"),
  new Citroen("Red"),
  new Peugeot("Yellow")
];

// Esto está listo para extender brandCars with other brand cars
// sin necesidad de tocar ninguna línea en la función `printAveragePriceOk`
export function printAveragePriceOk(cars: IBrandCar[]): void {
  for (let c = 0; c < brandCars.length; c++) {
    const car = brandCars[c];
    console.log(car.averagePrice);
  }
}
```
