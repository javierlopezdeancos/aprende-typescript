# Añadir a la forma de array de un entero

[URL de Leet Code](https://leetcode.com/problems/add-to-array-form-of-integer/)

La forma de array de un entero num es un array que representa sus dígitos en orden de izquierda a derecha.
Por ejemplo, para num = 1321, la forma de array es [1,3,2,1].
Dado num, la forma de array de un entero, y un entero k,
devuelve la forma de array del entero num + k.

**Ejemplo 1:**

```
Entrada: num = [1,2,0,0], k = 34
Salida: [1,2,3,4]
```

Explicación: 1200 + 34 = 1234

**Ejemplo 2:**

```
Entrada: num = [2,7,4], k = 181
Salida: [4,5,5]
```

Explicación: 274 + 181 = 455

**Ejemplo 3:**

```
Entrada: num = [2,1,5], k = 806
Salida: [1,0,2,1]
```

Explicación: 215 + 806 = 1021

**Ejemplo 4:**

```
Entrada: num = [9,9,9,9,9,9,9,9,9,9], k = 1
Salida: [1,0,0,0,0,0,0,0,0,0,0]
```

Explicación: 9999999999 + 1 = 10000000000

**Solución**

[Código Fuente](./addToArrayFormOfInteger.ts)
[Código de Prueba](./addToArrayFormOfInteger.test.ts)