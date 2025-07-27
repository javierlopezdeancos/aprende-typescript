# Tree Sum (Suma del árbol)

Escribe una función, `treeSum`, que reciba la raíz de un árbol binario que contiene valores numéricos. La función debe devolver la suma total de todos los valores del árbol.

```typescript
type NodeType<V> = {
  value: V;
  next?: NodeType<V>;
};

export const treeSum = (rootNode: NodeType<number>): number => {
  if (rootNode === null) {
    return 0;
  }

  let leftSum, rightSum;

  if (rootNode?.left) {
    leftSum = treeSum(rootNode.left) || 0;
  }

  if (rootNode?.right) {
    rightSum = treeSum(rootNode.right) || 0;
  }

  if (!leftSum && !rightSum) {
    return rootNode.value;
  }

  if (leftSum && rightSum) {
    return rootNode.value + leftSum + rightSum;
  }

  if (leftSum) {
    return rootNode.value + leftSum;
  }

  if (rightSum) {
    return rootNode.value + rightSum;
  }

  return 0;
};
```

## Código fuente
[Codigo fuente](./tree-sum.ts)

## Tests
[Codigo de tests](./tree-sum.test.ts)
