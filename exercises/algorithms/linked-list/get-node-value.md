# Get node value (Obtener valor del nodo)

Escribe una función, `getNodeValue`, que reciba la cabeza de una lista enlazada y un índice. La función debe devolver el valor de la lista enlazada en el índice especificado.

Si no hay ningún nodo en el índice dado, devuelve nulo.

## Código

```text
A -> B -> C -> D -> E -> F -> null
```

```typescript
type NodeType<V> = {
  value: V;
  next?: NodeType<V>;
};

const getNodeValue = <V>(headNode: NodeType<V>, nodeIndex: number): V | undefined => {
  let value: V | undefined = undefined;
  let index: number = 0;
  let current: NodeType<V> | undefined = headNode;

  while (current?.next) {
    if (index === nodeIndex) {
      return (value = current.value);
    }

    if (current?.next) {
      index++;
      current = current.next;
    }
  }

  return value;
};
```

## Código fuente
[Codigo fuente](./get-node-value.ts)

## Tests
[Codigo de tests](./get-node-value.test.ts)
