# Una suma muy grande

Echa un vistazo a la descripción completa del [ejercicio en HackerRank](https://www.hackerrank.com/challenges/a-very-big-sum)

En este desafío, se te pide que calcules e imprimas la suma de los elementos de un array, teniendo en cuenta que algunos de esos enteros pueden ser bastante grandes.

## Descripción de la función

Completa la función `aVeryBigSum` en el editor. Debe devolver la suma de todos los elementos del array.

`aVeryBigSum` tiene los siguientes parámetros:

- `int ar[n]`: un array de enteros.

### Devolución

- `long`: la suma de todos los elementos del array

### Formato de entrada

La primera línea de la entrada consiste en un entero `n`.

La siguiente línea contiene `n` enteros separados por espacios contenidos en el array.

### Formato de salida

Devuelve la suma entera de los elementos del array.

### Ejemplo de entrada

```
5
1000000001 1000000002 1000000003 1000000004 1000000005
```

### Salida

```
5000000015
```

_Nota_: Cuando sumamos varios valores enteros, la suma resultante puede exceder el [rango máximo](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER). Es posible que necesites usar un entero largo