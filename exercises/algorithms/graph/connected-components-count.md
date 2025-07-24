# Recuento de componentes conectados

Escribe una función, `connectedComponentsCount`, que reciba la lista de adyacencia de un **grafo no dirigido**. La función debe devolver el número de componentes conectados dentro del grafo.

```mermaid
flowchart LR
    1((1))-->2((2))
    4((4))-->6((6))
    6((6))-->4((4))
    5((5))-->6((6))
    6((6))-->5((5))
    8((8))-->6((6))
    6((6))-->8((8))
    7((7))-->6((6))
    6((6))-->7((7))
    3((3))-->3((3))
```