# Suma máxima de la ruta de la raíz a la hoja

Escribe una función, `maxRootToLeafPathSum`, que reciba la raíz de un árbol binario que contiene valores numéricos. La función debe devolver la suma máxima de cualquier ruta de la raíz a una hoja dentro del árbol.

Puedes asumir que el árbol de entrada no está vacío.

## Código

```text
                     (20)
       5               5
      / \            /
    11   3         11
   /  \    \      /
  4   2     1    4
```

```typescript
type NodeType<V> = {
  value: V;
  next?: NodeType<V>;
};

const maxRootToLeafPathSum = (rootNode: NodeType<number>): number => {
  if (rootNode === null) {
    return -Infinity;
  }

  const isLeaf = !rootNode.left && !rootNode?.right;

  if (isLeaf) {
    return rootNode.value;
  }

  let leftMaxPathSum: number = 0;
  let rightMaxPathSum: number = 0;

  if (rootNode?.left) {
    leftMaxPathSum = maxRootToLeafPathSum(rootNode.left);
  }

  if (rootNode?.right) {
    rightMaxPathSum = maxRootToLeafPathSum(rootNode.right);
  }

  return rootNode.value + Math.max(leftMaxPathSum, rightMaxPathSum);
};
```

## Código fuente
[Codigo fuente](./max-root-to-leaf-path-sum.ts)

## Tests
[Codigo de tests](./max-root-to-leaf-path-sum.test.ts)
