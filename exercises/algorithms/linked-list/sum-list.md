# Suma de la lista

Escribe una función, `sumList`, que reciba como argumento la cabeza de una lista enlazada que contiene números. La función debe devolver la suma total de todos los valores de la lista enlazada.

## Código

```text
2 -> 8 -> 3 -> 7 -> null  (20)
```

```typescript
type NodeType<V> = {
  value: V;
  next?: NodeType<V>;
};

const sumList = (headNode: NodeType<number>): number => {
  let sum: number = 0;

  if (headNode?.next) {
    sum = sumList(headNode.next);
  }

  return (sum = sum + headNode.value);
};
```

## Código fuente
[Codigo fuente](./sum-list.ts)

## Tests
[Codigo de tests](./sum-list.test.ts)
