# Diferencia diagonal (Diagonal Difference)

## URL
Echa un vistazo a la descripción completa del [ejercicio en HackerRank](https://www.hackerrank.com/challenges/diagonal-difference)

Dada una matriz cuadrada, calcula la diferencia absoluta entre las sumas de sus diagonales.

Por ejemplo, la matriz cuadrada `arr` se muestra a continuación:

```
1 2 3
4 5 6
9 8 9
```

La diagonal de izquierda a derecha = **1 + 5 + 9 = 15**. La diagonal de derecha a izquierda = **3 + 5 + 9 = 17**. Su diferencia absoluta es **|15 - 17| = 2**.

## Descripción de la función

Completa la función `diagonalDifference`.

`diagonalDifference` toma el siguiente parámetro:

- int arr[n][m]: un array de enteros

### Devolución

- int: la diferencia diagonal absoluta

### Formato de entrada

La primera línea contiene un único entero, `n`, el número de filas y columnas de la matriz cuadrada `arr`.

Cada una de las siguientes `n` líneas describe una fila, `arr[i]`, y consta de `n` enteros separados por espacios.

### Restricciones

- `-100 <= arr[i][j] <= 100`

### Formato de salida

Devuelve la diferencia absoluta entre las sumas de las dos diagonales de la matriz como un único entero.

### Ejemplo de entrada

```
3
11 2 4
4 5 6
10 8 -12
```

### Ejemplo de salida

```
15
```

### Explicación

La diagonal principal es:

```
11
   5
     -12
```

Suma de la diagonal principal: 11 + 5 - 12 = 4

La diagonal secundaria es:

```
     4
   5
10
```

Suma de la diagonal secundaria: 4 + 5 + 10 = 19
Diferencia: |4 - 19| = 15

> [!NOTE]
> |x| es el valor absoluto de x

## Solución

```typescript
function diagonalDifference(matrix: number[][]): number {
  let diagonalLeft = [];
  let diagonalRight = [];

  for (let i = 0; i < matrix.length; i++) {
    diagonalLeft.push(matrix[i][i]);
    diagonalRight.push(matrix[i][matrix.length - 1 - i]);
  }

  let sumLeftDiagonal = diagonalLeft.reduce((acc, cur) => {
    return acc + cur;
  });

  let sumRightDiagonal = diagonalRight.reduce((acc, cur) => {
    return acc + cur;
  });

  return Math.abs(sumRightDiagonal - sumLeftDiagonal);
}
````

## Código
[diagonal-difference.ts](./diagonal-difference.ts)

## Tests
[diagonal-difference.test.ts](./diagonal-difference.test.ts)
