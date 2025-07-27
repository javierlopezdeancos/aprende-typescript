# Linked list values (Valores de la lista enlazada)

Escribe una función, `linkedListValues`, que reciba la cabeza de una lista enlazada como argumento. La función debe devolver un `array` que contenga todos los valores de los nodos de la lista enlazada.

## Código

```text
A -> B -> C -> D -> null
```

```typescript
type NodeType<V> = {
  value: V;
  next?: NodeType<V>;
};

const linkedListValues = <V>(headNode: NodeType<V>): V[] => {
  let current: NodeType<V> | undefined;
  let values: V[] = [];

  current = headNode;

  while (current) {
    values.push(current.value);
    current = current.next;
  }

  return values;
};

const fillValues = <V>(headNode: NodeType<V>, values: V[]): void => {
  if (!headNode) {
    return;
  }

  values.push(headNode.value);

  if (headNode?.next) {
    fillValues(headNode.next, values);
  }
};

const linkedListValuesRecursiveVersion = <V>(headNode: NodeType<V>): V[] => {
  let values: V[] = [];
  fillValues(headNode, values);
  return values;
};
```

## Código fuente
[Codigo fuente](./linked-list-values.ts)

## Tests
[Codigo de tests](./linked-list-values.test.ts)
