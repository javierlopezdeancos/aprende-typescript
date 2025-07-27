# Find target (Encontrar objetivo)

Escribe una función, `findTarget`, que reciba la cabeza de una lista enlazada y un valor. La función debe devolver un `booleano` que indique si la lista enlazada contiene o no el valor.

## Código

```typescript
type NodeType<V> = {
  value: V;
  next?: NodeType<V>;
};

export const findTarget = <V>(headNode: NodeType<V>, target: V): boolean => {
  let isIn = false;

  if (headNode.value === target) {
    return true;
  }

  if (headNode?.next) {
    isIn = findTarget(headNode.next, target);
  }

  return isIn;
};
```

## Código fuente
[Codigo fuente](./find-target.ts)

## Tests
[Codigo de tests](./find-target.test.ts)
