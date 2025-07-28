# Suma simple de un array (Simple Array Sum)

## URL
Echa un vistazo a la descripción completa del [ejercicio en HackerRank](https://www.hackerrank.com/challenges/simple-array-sum/)

Dado un array de enteros, encuentra la suma de sus elementos.

Por ejemplo, si el array `arr = [1, 2, 3]`, `1 + 2 + 3 = 6`, así que devuelve `6`.

## Descripción de la función

Completa la función `simpleArraySum` en el editor. Debe devolver la suma de los elementos del array como un entero.

`simpleArraySum` tiene los siguientes parámetros:

`ar`: un array de enteros

### Formato de entrada

La primera línea contiene un entero `n`, que denota el tamaño del array.
La segunda línea contiene `n` enteros separados por espacios que representan los elementos del array.

### Restricciones

`0 < n, ar[1] <= 10`

### Formato de salida

Imprime la suma de los elementos del array como un único entero.

## Ejemplo de entrada

```
6
1 2 3 4 10 11
```

## Ejemplo de salida

```
31
```

## Explicación

Imprimimos la suma de los elementos del array `1 + 2 + 3 + 4 + 10 + 11 = 31`

## Solución

```typescript
function simpleArraySum(ar: number[]): number {
  var sum = ar.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  });

  return sum;
}

console.log(`
/**************************************/
/*         simpleArraySum             */
/**************************************/
`);

console.log(simpleArraySum([1, 2, 3, 4, 10, 11])); // 31
```

## Código
[simple-array-sum.ts](./simple-array-sum.ts)

## Tests
[simple-array-sum.test.ts](./simple-array-sum.test.ts)
