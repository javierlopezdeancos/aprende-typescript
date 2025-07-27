# Depth First Values

Escribe una función, `depthFirstValues`, que reciba la raíz de un árbol binario. La función debe devolver un array que contenga todos los valores del árbol en orden de profundidad.

## Código

```typescript
type NodeType<V> = {
  value: V;
  next?: NodeType<V>;
};

/**
 *
 * No recursive version
 *
const depthFirstValues = <NODE_VALUE>(rootNode: NodeType<NODE_VALUE>): NODE_VALUE[] => {
  if (rootNode === null) {
    return [];
  }

  const values: NODE_VALUE[] = [];
  const stack: NodeType<NODE_VALUE>[] = [rootNode];

  while (stack.length > 0) {
    const current = stack.pop();

    if (current) {
      values.push(current.value);

      if (current?.right) {
        stack.push(current.right);
      }

      if (current?.left) {
        stack.push(current.left);
      }
    }
  }

  return values;
};
*/

/**
 *
 * Recursive version
 */
const depthFirstValues = <NODE_VALUE>(rootNode: NodeType<NODE_VALUE>): NODE_VALUE[] => {
  if (rootNode === null) {
    return [];
  }

  let values = [rootNode.value];

  let leftValues: NODE_VALUE[];
  let rightValues: NODE_VALUE[];

  if (rootNode?.left) {
    leftValues = depthFirstValues(rootNode.left);
    values = [...values, ...leftValues];
  }

  if (rootNode?.right) {
    rightValues = depthFirstValues(rootNode.right);
    values = [...values, ...rightValues];
  }

  return values;
};
```

## Código fuente
[Codigo fuente](./depth-first-values.ts)

## Tests
[Codigo de tests](./depth-first-values.test.ts)
