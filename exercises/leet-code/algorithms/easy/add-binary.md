# Suma Binaria (Add Binary)

## URL
[URL de Leet Code](https://leetcode.com/problems/add-binary/)

Dadas dos cadenas binarias a y b, devuelve su suma como una cadena binaria.

**Ejemplo 1:**

```
Entrada: a = "11", b = "1"
Salida: "100"
```

**Ejemplo 2:**

```
Entrada: a = "1010", b = "1011"
Salida: "10101"
```

**Restricciones:**

- 1 <= a.length, b.length <= 104
- a y b consisten solo en caracteres '0' o '1'.
- Cada cadena no contiene ceros a la izquierda excepto el propio cero.

```text
Given two binary strings a and b, return their sum as a binary string.
Example 1:

Input: a = "11", b = "1"
Output: "100"

Example 2:

Input: a = "1010", b = "1011"
Output: "10101"

Constraints:
1 <= a.length, b.length <= 104
`a` and `b` consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
```

**Solución**

[Código Fuente](./addBinary.ts)
[Código de Prueba](./addBinary.test.ts)

## Código

```typescript
function addBinary(a: string, b: string): string {
  const aBinStr = `0b${a}`;
  const bBinStr = `0b${b}`;
  const sum = BigInt(aBinStr) + BigInt(bBinStr);

  return sum.toString(2);
}
````

## Código
[add-binary.ts](./add-binary.ts)

## Tests
[add-binary.test.ts](./add-binary.test.ts)
