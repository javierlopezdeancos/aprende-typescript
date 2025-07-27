# Tree Includes

Escribe una función, `treeIncludes`, que reciba la raíz de un árbol binario y un valor objetivo. La función debe devolver un booleano que indique si el valor está o no contenido en el árbol.

## Codigo

```typescript
type NodeType<V> = {
  value: V;
  next?: NodeType<V>;
};

const treeIncludes = <NODE_VALUE>(rootNode: NodeType<NODE_VALUE>, target: NODE_VALUE): boolean => {
  if (rootNode === null) {
    return false;
  }

  if (rootNode.value === target) {
    return true;
  }

  let isIncludeAtLeft = false;
  let isIncludeAtRight = false;

  if (rootNode?.left) {
    isIncludeAtLeft = treeIncludes(rootNode.left, target);
  }

  if (rootNode?.right) {
    isIncludeAtRight = treeIncludes(rootNode.right, target);
  }

  return isIncludeAtLeft || isIncludeAtRight;
};
```

## Código fuente
[Codigo fuente](./tree-includes.ts)

## Tests
[Codigo de tests](./tree-includes.test.ts)
