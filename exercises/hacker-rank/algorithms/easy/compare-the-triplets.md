# Comparar los tripletes (Compare the triplets)

## URL
Echa un vistazo a la descripción completa del [ejercicio en HackerRank](https://www.hackerrank.com/challenges/compare-the-triplets)

Alice y Bob crearon cada uno un problema para HackerRank. Un revisor califica los dos desafíos, otorgando puntos en una escala del 1 al 100 para tres categorías: claridad del problema, originalidad y dificultad.

La calificación para el desafío de Alice es el triplete `a = (a[0], a[1], a[2])`, y la calificación para el desafío de Bob es el triplete `b = (b[0], b[1], b[2])`.

La tarea es encontrar sus puntos de comparación comparando `a[0]` con `b[0]`, `a[1]` con `b[1]` y `a[2]` con `b[2]`.

- Si `a[i] > b[i]`, entonces Alice recibe 1 punto.
- Si `a[i] < b[i]`, entonces Bob recibe 1 punto.
- Si `a[i] = b[i]`, entonces ninguna persona recibe un punto.

Los puntos de comparación son los puntos totales que una persona ha ganado.

Dados a y b, determina sus respectivos puntos de comparación.

## Ejemplo

```
a = [1, 2, 3]
b = [3, 2, 1]
```

- Para los elementos `0`, Bob recibe un punto porque `a[0] < b[0]`.
- Para los elementos iguales `a[1]` y `b[1]`, no se ganan puntos.
- Finalmente, para los elementos 2, `a[2] > b[2]`, por lo que Alice recibe un punto.

El array de devolución es [1, 1] con la puntuación de Alice primero y la de Bob segundo.

## Descripción de la función

Completa la función `compareTriplets` en el editor.

`compareTriplets` tiene los siguientes parámetros:

- `int a[3]`: la calificación del desafío de Alice
- `int b[3]`: la calificación del desafío de Bob

### Devolución

- `int[2]`: La puntuación de Alice está en la primera posición y la de Bob en la segunda.

### Formato de entrada

La primera línea contiene 3 enteros separados por espacios, a[0], a[1] y a[2], los valores respectivos en el triplete a.

La segunda línea contiene 3 enteros separados por espacios, b[0], b[1] y b[2], los valores respectivos en el triplete b.

### Restricciones

- `1 ≤ a[i] ≤ 100`
- `1 ≤ b[i] ≤ 100`

### Ejemplo de entrada 0

```
5 6 7
3 6 10
```

### Ejemplo de salida 0

```
1 1
```

### Ejemplo de entrada 1

```
17 28 30
99 16 8
```

### Ejemplo de salida 1

```
2 1
```

## Solución

```typescript
export function compareTriplets(alice: number[], bob: number[]): number[] {
  let aliceScore = 0;
  let bobScore = 0;

  alice.forEach((ratingItem: number, i: number): void => {
    const aliceRatingItem = alice[i];
    const bobRatingItem = bob[i];

    if (aliceRatingItem === bobRatingItem) {
      return;
    }

    if (aliceRatingItem > bobRatingItem) {
      aliceScore += 1;
    } else {
      bobScore += 1;
    }
  });

  return [aliceScore, bobScore];
}
```

## Código
[compare-the-triplets.ts](./compare-the-triplets.ts)

## Tests
[compare-the-triplets.test.ts](./compare-the-triplets.test.ts)
