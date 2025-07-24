# 💎 I DE SOLID (PRINCIPIO DE SEGREGACIÓN DE INTERFACES)

Este principio sugiere que *“muchas interfaces específicas del cliente son mejores que una interfaz general”*.

Este es el primer principio que se aplica a la interfaz, los tres principios anteriores se aplican a las clases.

## ❌ MAL EJEMPLO

> Como podemos ver en este ejemplo, el loro no nada, el pingüino no vuela y el tucán no puede nadar.
>
> Las clases de cliente dependen de todos los métodos de `IBird` que no utilizan.

```ts
interface IBird {
  fly: () => void;
  eat: () => void;
  swim: () => void;
}

class Parrot implements IBird {
  public fly() {
    //...
  }

  public eat() {
    //..
  }

  public swim() {
    //..
  }
}

class Toucan implements IBird {
  public fly() {
    //...
  }

  public eat() {
    //..
  }

  public swim() {
    //..
  }
}

class Penguin implements IBird {
  public fly() {
    //...
  }

  public eat() {
    //..
  }

  public swim() {
    //..
  }
}
```

## ✔️ BUEN EJEMPLO

```ts
interface IBirdOk {
  eat: () => void;
}

interface IFlyBird extends IBirdOk {
  fly: () => void;
}

interface ISwimBird extends IBirdOk {
  swim: () => void;
}

class ParrotOk implements IFlyBird {
  public fly() {
    //...
  }

  public eat() {
    //..
  }
}

class ToucanOk implements IFlyBird {
  public fly() {
    //...
  }

  public eat() {
    //..
  }
}

class PenguinOk implements ISwimBird {
  public eat() {
    //..
  }

  public swim() {
    //..
  }
}
```