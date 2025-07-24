# Velas de tarta de cumpleaños

Estás a cargo de la tarta para el cumpleaños de un niño. Has decidido que la tarta tendrá una vela por cada año de su edad total. Solo podrán apagar las velas más altas. Cuenta cuántas velas son las más altas.

**Ejemplo**

velas = [4,4,1,3]

Las velas de altura máxima tienen 4 unidades de altura. Hay 2 de ellas, así que devuelve 2.

**Descripción de la función**

Completa la función `birthdayCakeCandles` en el editor de abajo.

`birthdayCakeCandles` tiene los siguientes parámetros:

- `int candles[n]`: las alturas de las velas

**Devuelve**

- `int`: el número de velas que son más altas

**Formato de entrada**

La primera línea contiene un único entero, , el tamaño de [velas].

La segunda línea contiene enteros separados por espacios, donde cada entero describe la altura de `candles[i]`.

**Restricciones**

- 1 <= n <= 10^5
- 1 <= candles[i] <= 10^7

**Ejemplo de entrada 0**

```
4
3 2 1 3
```

**Ejemplo de salida 0**

```
2
```

**Explicación 0**

Las alturas de las velas son [3,2,1,3]. Las velas más altas miden 3 unidades, y hay 2 de ellas.