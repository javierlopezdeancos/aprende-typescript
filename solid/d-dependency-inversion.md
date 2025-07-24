# 💎 D DE SOLID (PRINCIPIO DE INVERSIÓN DE DEPENDENCIAS)

Este principio sugiere que *“las clases deben depender de la abstracción pero no de la concreción”*. Lo que significa que deberíamos tener un objeto de interfaz que nos ayude a comunicarnos con las clases concretas. Lo que ganamos con esto es que ocultamos la implementación real de la clase A de la clase B. Por lo tanto, si la clase A cambia, la clase B no necesita preocuparse ni saber sobre los cambios.

## ❌ MAL EJEMPLO

> En este ejemplo, nuestro módulo de alto nivel `GetServiceWrong` depende de un módulo de bajo nivel `DatabaseServiceWrong`, debería ser la dirección opuesta de la dependencia.

```ts
export class DatabaseServiceWrong {
  //...
  public getNames(): string[] {
    return ["Frank", "James"];
  }
}

export class GetServiceWrong {
  constructor(private databaseService: DatabaseServiceWrong) {}

  public names(): string[] {
    return this.databaseService.getNames();
  }
}
```

## ✔️ BUEN EJEMPLO

> En este ejemplo, nuestro módulo de alto nivel `GetServiceOk` depende de una abstracción más genérica `DataSource`. No hay que preocuparse por qué tipo de implementación necesitamos para obtener datos, `DatabaseServiceOk` o `APIService`, porque ambos implementan esta interfaz de abstracción `DataSource` y funcionan bien en nuestro módulo de alto nivel `GetServiceOk`.

```ts

interface DataSource {
  getNames: () => string[];
}

export class DatabaseServiceOk implements DataSource {
  //...
  public getNames(): string[] {
    return ["Frank", "James"];
  }
}

export class APIService implements DataSource {
  //...
  public getNames(): string[] {
    return ["Frank", "James"];
  }
}

export class GetServiceOk {
  constructor(private dataSource: DataSource) {}

  public names(): string[] {
    return this.dataSource.getNames();
  }
}
```