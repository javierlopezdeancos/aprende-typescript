# Reverse list (Invertir lista)

Escribe una función, `reverseList`, que reciba la cabeza de una lista enlazada como argumento. La función debe invertir el orden de los nodos de la lista enlazada in-situ y devolver la nueva cabeza de la lista enlazada invertida.

## Código

```text
undefined   ->   A   ->   B   ->   C   ->   D   ->   E   ->   F   ->  undefined
   prev         curr     next

undefined   <-   A        B   ->   C   ->   D   ->   E   ->   F   ->  undefined
                prev     curr     next

undefined   <-   A   <-   B        C   ->   D   ->   E   ->   F   ->  undefined
                         prev     curr     next

undefined   <-   A   <-   B   <-   C        D   ->   E   ->   F   ->  undefined
                                  prev     curr     next

undefined   <-   A   <-   B   <-   C        D   ->   E   ->   F   ->  undefined
                                  prev     curr     next

    ...

undefined   <-   A   <-   B   <-   C   <-   D   <-   E   <-   F
```

```typescript
type NodeType<V> = {
  value: V;
  next?: NodeType<V>;
};

/**
 *
 * No recursive solution
 *
export const reverseList = <V>(headNode: NodeType<V>): NodeType<V> | undefined => {
  let prev: NodeType<V> | undefined = undefined;
  let current: NodeType<V> | undefined = headNode;

  while (current) {
    const next: NodeType<V> | undefined = current.next;

    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};
*/

/**
 *
 * Recursive solution
 */
export const reverseList = <V>(
  headNode: NodeType<V> | undefined,
  prev: NodeType<V> | undefined = undefined
): NodeType<V> | undefined => {
  if (!headNode) {
    return prev;
  }

  const next = headNode.next;
  headNode.next = prev;

  return reverseList(next, headNode);
};
```

## Código fuente
[Codigo fuente](./reverse-list.ts)

## Tests
[Codigo de tests](./reverse-list.test.ts)
