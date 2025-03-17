# Aprende typescript en español 🇪🇸

![GitHub License](https://img.shields.io/github/license/javierlopezdeancos/aprende-go)

![mascota de golang estudiando](./assets/readme.jpg)

## Typescript avanzado

Tener un conocimiento sólido de los conceptos básicos de TypeScript nos permite profundizar en sus capacidades más potentes, que pueden mejorar drásticamente nuestro código. En esta sección exploraremos los **Utility Types**, los **Mapped Types** y los tipos **Conditional Types**, demostrando cómo cada uno puede usarse para crear tipos más flexibles, precisos y expresivos.

### Utility Types

TypeScript viene con varios tipos de utilidades integradas que ayudan a manipular tipos de una forma muy flexible. Así es como funcionan algunos de ellos:

* **`Parcial<T>`** hace que todas las propiedades del tipo `T` sean opcionales. Esto es particularmente útil cuando desea **crear objetos que pueden tener solo un subconjunto de propiedades de un tipo más complejo**.

* **`Readonly<T>`** hace que todas las propiedades del tipo `T` sean de solo lectura. Esta utilidad es excelente para **crear objetos inmutables**, lo que garantiza que una vez creado un objeto, sus propiedades no se puedan cambiar.

* **`Pick<T, K>`** le permite crear un tipo eligiendo el conjunto de propiedades `K` del tipo `T`. Es útil para **crear tipos que solo necesitan unas pocas propiedades de un tipo más grande**.

* **`Record<K, T>`** crea un tipo con un conjunto de propiedades `K` de tipo `T`. Esta utilidad es útil para **crear objetos donde no conoce los nombres de las propiedades** con anticipación pero desea asegurarse de que todos los valores sean de un tipo determinado.

Podemos ver estos y mas Utility Types en la documentación oficial de TypeScript [oficial docs to utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html).

Estos Utility Types te permiten escribir tipos más detallados y específicos con el mínimo esfuerzo, lo que hace que el código sea más sólido y flexible.

### Mapped Types

Los Mapped Types permiten tomar un modelo existente y transformar cada una de sus propiedades en nuevos tipos. Básicamente, te permiten crear nuevos tipos basados en los antiguos aplicando una transformación a cada propiedad. Veamos un ejemplo simple:

```typescript
type Permissions = 'read' | 'write' | 'delete';

type PermissionMap<T> = {
  [P in keyof T]: Permissions;
};
```
