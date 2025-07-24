# Suma mínima y máxima

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