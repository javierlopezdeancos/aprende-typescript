# Más Menos

Echa un vistazo a la descripción completa del [ejercicio en HackerRank](https://www.hackerrank.com/challenges/plus-minus)

Dado un array de enteros, calcula las proporciones de sus elementos que son positivos, negativos y cero. Imprime el valor decimal de cada fracción en una nueva línea con 6 decimales.

**Nota**: Este desafío introduce problemas de precisión. Los casos de prueba se escalan a seis decimales, aunque se aceptan respuestas con un error absoluto de hasta 10^-4.

## Descripción de la función

Completa la función `plusMinus` en el editor de abajo.

`plusMinus` tiene los siguientes parámetros:

- int arr[n]: un array de enteros

## Imprimir

Imprime las proporciones de valores positivos, negativos y cero en el array. Cada valor debe imprimirse en una línea separada con 6 dígitos después del decimal. La función no debe devolver un valor.

## Formato de entrada

La primera línea contiene un entero, n, el tamaño del array.
La segunda línea contiene n enteros separados por espacios que describen el array.

## Formato de salida

**Imprime** las siguientes **3** líneas, cada una con **6** decimales:

1. proporción de valores positivos
2. proporción de valores negativos
3. proporción de ceros

## Ejemplo de entrada

```
STDIN           Función
-----           --------
6               tamaño de arr[] n = 6
-4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
```

## Ejemplo de salida

```
0.500000
0.333333
0.166667
```

## Explicación

Hay **3** números positivos, **2** números negativos y **1** cero en el array.

Las proporciones de aparición son positivas: **3/6=0.500000**, negativas:**2/6=0.333333** y ceros: **1/6=0.166667**.