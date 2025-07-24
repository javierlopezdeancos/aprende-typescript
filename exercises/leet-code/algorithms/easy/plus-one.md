# Más Uno

[Enlace de Leet Code](https://leetcode.com/problems/plus-one/)

Dado un array no vacío de dígitos decimales que representan un entero no negativo, incrementa en uno el entero.

Los dígitos se almacenan de tal manera que el dígito más significativo está a la cabeza de la lista, y cada elemento del array contiene un solo dígito.

Puedes asumir que el entero no contiene ningún cero a la izquierda, excepto el número 0.

**Ejemplo 1:**

```
Entrada: digitos = [1,2,3]
Salida: [1,2,4]
Explicación: El array representa el entero 123
```

**Ejemplo 2:**

```
Entrada: digitos = [4,3,2,1]
Salida: [4,3,2,2]
Explicación: El array representa el entero 4321.
```

**Ejemplo 3:**

```
Entrada: digitos = [0]
Salida: [1]
```

**Restricciones:**

- 1 <= digits.length <= 100
- 0 <= digits[i] <= 9

**Solución**

[Código Fuente](./plusOne.ts)
[Código de Pruebas](./plusOne.test.ts)