# Escalera (Staircase)

## URL
Echa un vistazo a la descripción completa del [ejercicio en HackerRank](https://www.hackerrank.com/challenges/staircase/)

Detalle de la escalera

Esta es una escalera de tamaño n = 4:

```
   #
  ##
 ###
####
```

Su base y altura son ambas iguales a n. Se dibuja usando símbolos # y espacios. La última línea no está precedida por ningún espacio.

Escribe un programa que imprima una escalera de tamaño `n`.

## Descripción de la función

Completa la función `staircase` en el editor.

`staircase` tiene los siguientes parámetros:

- `int n`: un entero

### Imprimir

Imprime una escalera como se describe arriba.

### Formato de entrada

Un único entero, `n`, que denota el tamaño de la escalera.

Restricciones

`0 < n <= 100`

### Formato de salida

Imprime una escalera de tamaño `n` usando símbolos # y espacios.

**Nota**: La última línea debe tener `0` espacios.

### Ejemplo de entrada

```
6
```

### Ejemplo de salida

```
     #
    ##
   ###
  ####
 #####
######
```

### Explicación

La escalera está alineada a la derecha, compuesta por símbolos # y espacios, y tiene una altura y anchura de `n = 6`.

```text
*****
n = 4
k = 2
*****

  0 1 2 3
0 - - - #  |  n - 2 (0 + k) = 2
1 - - # #  |  n - 3 (1 + k) = 1
2 - # # #  |  n - 4 (2 + k) = 0
3 # # # #  |  n - 5 (3 + k) = -1

*****
n = 5
k = 2
*****

  0 1 2 3 4
0 - - - - #  |  n - 2 (r + k) = 3
1 - - - # #  |  n - 3 (r + k) = 2
2 - - # # #  |  n - 4 (r + k) = 1
3 - # # # #  |  n - 5 (r + k) = 0
4 # # # # #  |  n - 6 (r + k) = -1
```

## Solución

```typescript
function staircase(n: number): string {
  const k = 2;
  let matrix: string[] = [];

  for (let r = 0; r <= n - 1; r++) {
    let row = new Array(n + 1).fill(' ');
    const columnMaxWhiteSpace = n - (r + k);

    for (let c = 0; c <= n; c++) {
      if (c === n) {
        row[c] = '\n';
      } else {
        if (columnMaxWhiteSpace >= 0) {
          if (c > columnMaxWhiteSpace) {
            row[c] = '#';
          }
        } else {
          row[c] = '#';
        }
      }
    }

    matrix[r] = row.join('');
  }

  return matrix.join('');
}
````

## Código
[staircase.ts](./staircase.ts)

## Tests
[staircase.test.ts](./staircase.test.ts)
