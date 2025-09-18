# 💎 S - Responsabilidad única

*Una clase debería tener una, y sólo una, razón para cambiar.*

Si nuestras clases asumen **múltiples responsabilidades**, estarán **muy fuertemente acopladas, lo que las hará más difíciles de mantener**.

Esto también puede considerarse la definición de [Separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns).

## ❌ Ejemplo erróneo

La clase debe tener una responsabilidad en este caso, solo construir un coche con sus características pero no tener ningún método de registro en la consola, esto debería ser otra responsabilidad.

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
