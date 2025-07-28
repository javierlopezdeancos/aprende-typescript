# 💎 S - Principio de responsabilidad única (Principle of Single Responsibility)

El propio nombre sugiere que la *“clase debe tener una y solo una responsabilidad”*.

## ❌ Ejemplo erróneo

La clase debe tener una responsabilidad en este caso
solo construir un coche con sus características pero no
tener ningún método de registro en la consola, esto debería ser otra
responsabilidad.

```ts
export class CarWrong {
  private _wheels: string = "4";

  constructor(private _brand: string, private _color: string) {}

  get brand(): string {
    return this._brand;
  }

  get wheels(): string {
    return this._wheels;
  }

  get color(): string {
    return this._color;
  }

  public description(): void {
    console.log(`Mi ${this.brand} es ${this.color}`);
  }
}
```

## ✔️ Ejemplo correcto

En este caso tenemos dos clases con responsabilidades divididas.
`CarLogger` tiene la responsabilidad de registrar en la consola algunas acciones
del coche inyectado por parámetros.

```ts
export class CarOk {
  private _wheels: string = "4";

  constructor(private _brand: string, private _color: string) {}

  get brand(): string {
    return this._brand;
  }

  get wheels(): string {
    return this._wheels;
  }

  get color(): string {
    return this._color;
  }
}

export class CarLogger {
  constructor(private car: CarOk) {}

  public description(): void {
    console.log(`Mi ${this.car.brand} es ${this.car.color}`);
  }
}
```
