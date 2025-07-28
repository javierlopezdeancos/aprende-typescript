# Distancias mínimas (Minimum Distances)

## URL
Echa un vistazo a la descripción completa del [ejercicio en HackerRank](https://www.hackerrank.com/challenges/minimum-distances)

La distancia entre dos valores de un array es el número de índices que hay entre ellos. Dado un array, encuentra la distancia mínima entre cualquier par de elementos iguales en el array. Si no existe tal valor, devuelve -1.

## Código

```typescript
export function minimumDistances(numbers: number[]): number {
  let min = Number.MAX_SAFE_INTEGER;

  if (numbers.length <= 1) {
    return -1;
  }

  const pairs = new Set<number>();

  for (let i = 0; i < numbers.length; i++) {
    const n = numbers[i];

    const repeated = numbers.filter((x: number) => x === n).length;

    if (repeated !== 2 || pairs.has(n)) {
      continue;
    }

    const j = numbers.indexOf(n);
    const k = numbers.lastIndexOf(n);
    const distance = Math.abs(j - k);

    min = Math.min(min, distance);
    pairs.add(n);
  }

  return min === Number.MAX_SAFE_INTEGER ? -1 : min;
}
```

## Código
[minimum-distance.ts](./minimum-distance.ts)

## Tests
[minimum-distance.test.ts](./minimum-distance.test.ts)
