# Resuélveme primero (Solve Me First)

## URL
Echa un vistazo a la descripción completa del [ejercicio en HackerRank](https://www.hackerrank.com/challenges/solve-me-first/problem)

Echa un vistazo a la descripción completa del [ejercicio en HackerRank](https://www.hackerrank.com/challenges/a-very-big-sum)

Completa la función `solveMeFirst` para calcular la suma de dos enteros.

## Ejemplo

```
a = 7
b = 3
```

Devuelve `10`.

### Descripción de la función

Completa la función `solveMeFirst` en el editor de abajo.

`solveMeFirst` tiene los siguientes parámetros:

- `int a`: el primer valor
- `int b`: el segundo valor

### Devuelve

- `int`: la suma de a y b

### Restricciones

`1 <= a,b <= 1000`

### Ejemplo de entrada

```
a = 2
b = 3
```

### Ejemplo de salida

```
5
```

### Explicación

`2 + 3 = 5`

## Solución

```typescript
function solveMeFirst(a = 0, b = 0): number | null {
  if (a >= 1 && b <= 1000) {
    return a + b;
  } else if (a >= 1 && b > 1000) {
    return a;
  } else if (a < 1 && b <= 1000) {
    return b;
  } else {
    return null;
  }
}

console.log(solveMeFirst(100, 1000));
console.log(solveMeFirst(2, 3));
```

## Código
[solve-me-first.ts](./solve-me-first.ts)

## Tests
[solve-me-first.test.ts](./solve-me-first.test.ts)
