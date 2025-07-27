# Breadth first values

Escribe una función, `breadthFirstValues`, que reciba la raíz de un árbol binario. La función debe devolver un array que contenga todos los valores del árbol en orden de anchura.

## Código

```text
       a
      / \
     b   c
    / \   \
   d   e   f

  -> [a, b, c, d, e, f]
```

```typescript
type NodeType<V> = {
  value: V;
  left?: NodeType<V>;
  right?: NodeType<V>;
};

const breadthFirstValues = <N>(rootNode: NodeType<V>): V[] => {
  if (rootNode === null) {
    return [];
  }

  const values: V[] = [];
  const queue: NodeType<V>[] = [rootNode];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current?.value) {
      values.push(current.value);
    }

    if (current?.left) {
      queue.push(current.left);
    }

    if (current?.right) {
      queue.push(current.right);
    }
  }

  return values;
};
```

## Código fuente
[Codigo fuente](./breadth-first-values.ts)

## Tests
[Codigo de tests](./breadth-first-values.test.ts)
