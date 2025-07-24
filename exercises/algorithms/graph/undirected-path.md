# Ruta no dirigida

Escribe una función, `undirectedPath`, que reciba un array de aristas para un grafo no dirigido y dos nodos (nodoA, nodoB). La función debe devolver un booleano que indique si existe o no una ruta entre `nodeA` y `nodeB`.

```mermaid
flowchart LR
    i((i))-->j((j))
    j((j))-->i((i))
    i((i))-->k((k))
    k((k))-->i((i))
    l((l))-->k((k))
    k((k))-->l((l))
    k((k))-->m((m))
    m((m))-->k((k))
    o((o))-->n((n))
    n((n))-->o((o))
```