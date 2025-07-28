# Suma mínima y máxima (Mini Max Sum)

## URL
Echa un vistazo a la descripción completa del [ejercicio en HackerRank](https://www.hackerrank.com/challenges/mini-max-sum)

Dados cinco enteros positivos, encuentra los valores mínimo y máximo que se pueden calcular sumando exactamente cuatro de los cinco enteros. Luego, imprime los respectivos valores mínimo y máximo como una sola línea de dos enteros largos separados por espacios.

**Ejemplo**

*arr=[1, 3, 5, 7, 9]*

La suma mínima es *1 + 3 + 5 + 7 = 16* y la suma máxima es *3 + 5 + 7 + 9 = 24*. La función imprime

```
16 24
```

**Descripción de la función**

Completa la función `miniMaxSum` en el editor de abajo.

`miniMaxSum` tiene los siguientes parámetros:

* *arr: un array de 5 enteros*

**Imprimir**

Imprime dos enteros separados por espacios en una línea: la suma mínima y la suma máxima de
`4` de `5` elementos.

**Formato de entrada**

Una sola línea de cinco enteros separados por espacios.

**Restricciones**

1 <= arr[i] <= 10e9

**Formato de salida**

Imprime dos enteros largos separados por espacios que denoten los respectivos valores mínimo y máximo que se pueden calcular sumando exactamente cuatro de los cinco enteros. (La salida puede ser mayor que un entero de 32 bits).

**Ejemplo de entrada**

```
1 2 3 4 5
```

**Ejemplo de salida**

```
10 14
```

## Solución

```typescript
function miniMaxSum(nbs: number[]): string {
  let max: number = 0;
  let min: number = 0;

  for (let i = 0; i < nbs.length; i++) {
    const nb = nbs[i];
    const subNbs = nbs.filter((subNb, index) => index !== i);

    let subSum: number = 0;

    for (let j = 0; j < subNbs.length; j++) {
      subSum = subSum + subNbs[j];
    }

    if (subSum > max || i === 0) {
      max = subSum;
    }

    if (subSum < min || i === 0) {
      min = subSum;
    }
  }

  return `${min} ${max}`;
}
````

## Código
[mini-max-sum.ts](./mini-max-sum.ts)

## Tests
[mini-max-sum.test.ts](./mini-max-sum.test.ts)
