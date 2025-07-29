# Añadir a la forma de array de un entero

## URL
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

## Solución

```typescript
function getArrayFromInteger(int: number): number[] {
  /**
   * Other option to the same implementation.
   * const s = int.toString()
   * return s.split('').map(Number)
   */
  const stringToNumber = (str: string) => Number(str);
  return Array.from(String(int), stringToNumber);
}

function getBigger(a: number[], b: number[]): number[] {
  if (a.length >= b.length) {
    return a;
  }

  return b;
}

function getSmaller(a: number[], b: number[]): number[] {
  if (a.length < b.length) {
    return a;
  }

  return b;
}

function getFilledWithZeros(nums: number[], zeros: number): number[] {
  for (let n = zeros; n > 0; n--) {
    nums.unshift(0);
  }

  return [...nums];
}

export function addArrayFormOfInteger(num: number[], k: number): number[] {
  const sum = [] as number[];

  const ks = getArrayFromInteger(k);
  const bigger = getBigger(num, ks);
  const small = getSmaller(num, ks);
  const zerosToAddToSmall = bigger.length - small.length;
  const smallWithZeros = getFilledWithZeros(small, zerosToAddToSmall);

  let carry = 0;

  for (let s = bigger.length - 1; s >= 0; s--) {
    const ai = smallWithZeros[s] ? smallWithZeros[s] : 0;
    const bi = bigger[s] ? bigger[s] : 0;
    const si = ai + bi + carry;

    if (si > 9) {
      carry = 1;
      sum[s] = si % 10;

      if (s === 0) {
        sum.unshift(1);
        carry = 0;
      }
    } else {
      carry = 0;
      sum[s] = si;
    }
  }

  return sum;
}
```

## Código
[add-to-array-form-of-integer.ts](./add-to-array-form-of-integer.ts)

## Tests
[add-to-array-form-of-integer.test.ts](./add-to-array-form-of-integer.test.ts)
