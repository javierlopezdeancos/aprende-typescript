# Multiplicacion de cadenas de texto (Multiply Strings)

## Solucion

```typescript
function createMatrix(rows: number, columns: number): number[][] {
  return new Array(rows).fill(new Array(columns));
}

function multiply(multiplier: number, multiplied: number[]) {
  const ps = [] as number[];
  let carry = 0;

  for (let m = multiplied.length - 1; m >= 0; m--) {
    const p = multiplied[m] * multiplier + carry;

    if (p > 9 && m > 0) {
      ps[m + 1] = p % 10;
      carry = (p - ps[m + 1]) / 10;
    } else if (p > 9 && m === 0) {
      ps[m + 1] = p % 10;
      ps[m] = (p - ps[m + 1]) / 10;
    } else {
      carry = 0;
      ps[m + 1] = p;
      ps[m] = 0;
    }
  }

  return ps;
}

function createSumMatrix(skeletonSumMatrix: number[][], multiplier: number[], multiplied: number[]) {
  for (let mr = multiplier.length - 1; mr >= 0; mr--) {
    skeletonSumMatrix[mr] = multiply(multiplier[mr], multiplied);
  }

  return skeletonSumMatrix;
}

function addZerosToRowInSumMatrix(
  row: number[],
  rows: number,
  columns: number,
  spaces: number,
  position: number
): number[] {
  if (rows === 1) {
    return row;
  } else if (position === 0) {
    for (let r = 0; r < columns - spaces - 1; r++) {
      row.push(0);
    }
  } else if (position === rows - 1) {
    for (let r = 0; r < columns - spaces - 1; r++) {
      row.unshift(0);
    }
  } else {
    for (let r = 1; r < rows - position; r++) {
      row.push(0);
    }

    for (let r = 1; r <= position; r++) {
      row.unshift(0);
    }
  }

  return row;
}

function addZerosToSumMatrix(sumMatrix: number[][], rows: number, columns: number, spaces: number): number[][] {
  sumMatrix.forEach((sumMatrixRow: number[], r: number) => {
    addZerosToRowInSumMatrix(sumMatrixRow, rows, columns, spaces, r);
  });

  return sumMatrix;
}

function getProductsFromSumMatrixWithZeros(matrix: number[][], columns: number): number[] {
  const sum = new Array(columns) as number[];
  const carry = new Array(columns) as boolean[];

  for (let r = 0; r < matrix.length; r++) {
    for (let c = columns - 1; c >= 0; c--) {
      const s = (sum[c] ? sum[c] : 0) + matrix[r][c] + (carry[c + 1] ? 1 : 0);

      if (s > 9) {
        sum[c] = s % 10;
        carry[c] = true;
      } else {
        sum[c] = s;
        carry[c] = false;
      }
    }
  }

  return sum;
}

function removeLeftZeros(chars: string[]): string[] {
  const firstNumberFromLeft = chars.findIndex((char: string): boolean => char !== '0');
  return chars.slice(firstNumberFromLeft, chars.length);
}

function getStringProduct(products: number[]): string {
  const productsStrings = products.map((p: number): string => String(p));
  return removeLeftZeros(productsStrings).join('');
}

export function multiplyStrings(string1: string, string2: string): string {
  const multiplied = string1.split('').map((s) => Number(s));
  const multiplier = string2.split('').map((s) => Number(s));

  const multipliedLength = string1.length;
  const multiplierLength = string2.length;

  const rows = multiplierLength;
  const columns = multipliedLength * 2;
  const skeletonSumMatrix = createMatrix(multiplierLength, multipliedLength * 2);
  const sumMatrix = createSumMatrix(skeletonSumMatrix, multiplier, multiplied);

  const sumMatrixWithZeros = addZerosToSumMatrix(sumMatrix, rows, columns, multipliedLength);

  const products = getProductsFromSumMatrixWithZeros(sumMatrixWithZeros, columns);

  return getStringProduct(products);
}

/**
 *
 export function multiply(string1: string, string2: string): string {
    const prodNumber = Number(string1) * Number(string2);

    if (prodNumber >= Number.MAX_SAFE_INTEGER) {
      const bigInt1 = BigInt(Number(string1));
      const bigInt2 = BigInt(Number(string2));

      return BigInt(bigInt1 * bigInt2).toString();
    } else {
      return prodNumber.toString();
    }
  }
*/

/**
 * Works with all big integers
 *
 function multiply(num1: string, num2: string): string {
  if(!+num1 || !+num2) return '0'
    const prod = Array(num1.length + num2.length).fill(0);
    let currIdx = prod.length-1;

    for(let i = num1.length-1; i >= 0; i--) {
        let idx = currIdx--;

        for(let j = num2.length-1; j >= 0; j--) {
            const res = +num1[i] * +num2[j] + prod[idx];
            prod[idx] = res % 10;
            prod[--idx] += Math.floor(res / 10);
        }
    }
    return prod.join('').replace(/^0+/, '')
  };
*/
```

## Código
[multiply-strings.ts](./multiply-strings.ts)

## Tests
[multiply-strings.test.ts](./multiply-strings.test.ts)
