# Aprende typescript en castellano 🇪🇸

![GitHub License](https://img.shields.io/github/license/javierlopezdeancos/aprende-go)

![perrete cuqui con una gorra de typescript declarando su amor por el](./assets/readme.jpg)

- [Aprende typescript en español 🇪🇸](advanced/advanced.md#aprende-typescript-en-espaol)
  - [Typescript avanzado](advanced/advanced.md#typescript-avanzado)
    - [Utility Types](advanced/advanced.md#utility-types)
    - [Mapped Types](advanced/advanced.md#mapped-types)
  - Principios solid
    - [S - Responsabilidad única](solid/s-single-responsibility.md)
    - [O - Abierto/Cerrado](solid/o-open-closed.md)
    - [L - Sustitución de Liskov](solid/l-liskov-substitution.md)
    - [I - Segregación de Interfaces](solid/i-interface-segregation.md)
    - [D - Inversión de Dependencias](solid/d-dependency-inversion.md)
  - Patrones de diseño
    - Comportamiento
      - [Iterator](patterns/behavioral/iterator.md)
      - [Mediator](patterns/behavioral/mediator.md)
      - [Observer](patterns/behavioral/observer.md)
      - [publisher-subscriber](patterns/behavioral/publisher-subscriber.md)
      - [Strategy](patterns/behavioral/strategy.md)
    - Estructurales
      - [Composite](patterns/structural/composite.md)
      - [Decorator](patterns/structural/decorator.md)
      - [Facade](patterns/structural/facade.md)
      - [Flyweight](patterns/structural/flyweight.md)
      - [Proxy](patterns/structural/proxy.md)
    - Creacionales
      - [Builder](patterns/creational/builder.md)
      - [Factory](patterns/creational/factory.md)
      - [Prototype](patterns/creational/prototype.md)
      - [Singleton](patterns/creational/singleton.md)
  - Ejercicios
    - Algorithms
      - Linked List
        - [Linked list values](exercises/algorithms/linked-list/linked-list-values.md).
        - [Sum list](exercises/algorithms/linked-list/sum-list.md).
        - [Get node value](exercises/algorithms/linked-list/get-node-value.md).
        - [Find target](exercises/algorithms/linked-list/find-target.md).
        - [Reverse list](exercises/algorithms/linked-list/reverse-list.md).
        - [Zipper list](exercises/algorithms/linked-list/zipper-lists.md).
      - Binary tree
        - [Breadth first values](exercises/algorithms/binary-tree/breadth-first-values.md).
        - [Depth first values](exercises/algorithms/binary-tree/depth-first-values.md).
        - [Tree includes](exercises/algorithms/binary-tree/tree-includes.md).
        - [Tree min value](exercises/algorithms/binary-tree/tree-min-value.md).
        - [Tree sum](exercises/algorithms/binary-tree/tree-sum.md).
        - [Tree max path sum](exercises/algorithms/binary-tree/tree-max-path-sum.md).
        - [Max root to leaf path sum](exercises/algorithms/binary-tree/max-root-to-leaf-path-sum.md).
      - Graph
        - [Breadth first values](exercises/algorithms/graph/breadth-first-values.md).
        - [Build graph by edges](exercises/algorithms/graph/build-graph-by-edges.md).
        - [Connected components count](exercises/algorithms/graph/connected-components-count.md).
        - [Has path](exercises/algorithms/graph/has-path.md).
        - [Depth first values](exercises/algorithms/graph/depth-first-values.md).
        - [Undirected path](exercises/algorithms/graph/undirected-path.md).
    - [Coderpad](https://coderpad.io)
    - [LeetCode](https://leetcode.com)
      - Algorithms
        - Easy
          - [Add array form of integer](exercises/leet-code/algorithms/easy/add-to-array-form-of-integers.md)
          - [Add binary](exercises/leet-code/algorithms/easy/add-binary.md)
          - [Plus one](exercises/leet-code/algorithms/easy/plus-one.md)
          - [De numero romano a numero entero](exercises/leet-code/algorithms/easy/roman-to-integer.md)
        - Medium
          - [Add two numbers](exercises/leet-code/algorithms/medium/add-two-numbers.md)
          - [Multiplicacion de cadenas de texto](https://leetcode.com/algorithms/medium/multiply-strings/)
          - [Longest substring without repeating characters](exercises/leet-code/algorithms/medium/longest-substring-without-repeating-characters.md)
    - [HackerRank](https://www.hackerrank.com)
      - Algorithms
        - Easy
          - [A very big sum](exercises/hacker-rank/algorithms/easy/a-very-big-sum.md)
          - [Birthday cake candles](exercises/hacker-rank/algorithms/easy/birthday-cake-candles.md)
          - [Breaking the records](exercises/hacker-rank/algorithms/easy/breaking-the-records.md)
          - [Compare de triplets](exercises/hacker-rank/algorithms/easy/compare-the-triplets.md)
          - [Diagonal difference](exercises/hacker-rank/algorithms/easy/diagonal-difference.md)
          - [Mini max sum](exercises/hacker-rank/algorithms/easy/mini-max-sum.md)
          - [Plus minus](exercises/hacker-rank/algorithms/easy/plus-minus.md)
          - [Repeated string](exercises/hacker-rank/algorithms/easy/repeated-string.md)
          - [Simple array sum](exercises/hacker-rank/algorithms/easy/simple-array-sum.md)
          - [Solve me first](exercises/hacker-rank/algorithms/easy/solve-me-first.md)
          - [Staircase](exercises/hacker-rank/algorithms/easy/staircase.md)
          - [Time conversion](exercises/hacker-rank/algorithms/easy/time-conversion.md)
        - Medium
          - [Climbing the leaderboard](exercises/hacker-rank/algorithms/medium/climbing-the-leaderboard.md)
    - Real code interviews
      - [Count dupes](./src/real-code-interviews/count-dupes.md)

## Instala el entorno

Instala las dependencias para ejecutar todos los comandos:

```bash
npm i
```

## Prueba los ejercicios

Para comprobar el código fuente de los ejercicios, puedes usar el siguiente comando:

```bash
npm tests
```

## Añadir nuevos ejercicios

Puedes añadir un nuevo ejercicio con su prueba siguiendo el mismo patrón:

```text
my-new-exercise-file.ts        // Código fuente del ejercicio
my-new-exercise-file.test.ts   // Código de prueba del ejercicio
```

Para escribir el código fuente mientras se ejecutan las pruebas, puedes ejecutar:

```bash
npm run test:watch
```
