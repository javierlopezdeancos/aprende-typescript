# Numero romano a entero (Roman to Integer)

Los numeros romanos estan representados por siete diferentes
simbolos: I, V, X, L, C, D y M.

Simbolo  Valor
  I       1
  V       5
  X       10
  L       50
  C       100
  D       500
  M       1000

Por ejemplo, 2 esta escrito como II en numeros romanos, simplemente dos unos juntos. Por ejemplo,12 esta escrita como XII, que es simplemente X + II.

The number 27 is written as XXVII, which is XX + V + II.
Roman numerals are usually written largest to smallest from left to right.
However, the numeral for four is not IIII. Instead,
the number four is written as IV.
Because the one is before the five we subtract it making four.
The same principle applies to the number nine, which is written as IX.

There are six instances where subtraction is used:
  I can be placed before V (5) and X (10) to make 4 and 9.
  X can be placed before L (50) and C (100) to make 40 and 90.
  C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

Example 1:
  Input: s = "III"
  Output: 3
  Explanation: III = 3.

Example 2:
  Input: s = "IV"
  Output: 4
  Explanation: IV = 4.

Example 3:
  Input: s = "IX"
  Output: 9
  Explanation: IX = 9.

Example 4:
  Input: s = "LVIII"
  Output: 58
  Explanation: LVIII = 50 + 5 + 3 = 58.

Example 5:
  Input: s = "MCMXCIV"
  Output: 1994
  Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

Constraints:
  1 <= s.length <= 15
  s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
  It is guaranteed that s is a valid roman numeral in the range [1, 3999].

## Solucion

```typescirpt
function romanToInteger(rs: string): number {
  enum Roman {
    M = 1000,
    CM = 900,
    D = 500,
    CD = 400,
    C = 100,
    XC = 90,
    L = 50,
    XL = 40,
    X = 10,
    IX = 9,
    V = 5,
    IV = 4,
    I = 1,
  }

  const RomanSpecialCases = [Roman[900], Roman[400], Roman[90], Roman[40], Roman[9], Roman[4]];

  let result = 0;

  const rchars = rs.split('') as unknown as Roman[];
  let len = rchars.length;

  for (let i = 0; i < len; i++) {
    const isASpecialCase = RomanSpecialCases.includes(String(rchars[i] + rchars[i + 1]));

    if (isASpecialCase) {
      result += Number(Roman[rchars[i] + rchars[i + 1]]);

      if (rchars[i + 1]) {
        i++;
        continue;
      }

      return result;
    } else {
      result += Number(Roman[rchars[i]]);
    }
  }

  return result;
}
```

## Código
[roman-to-integer.ts](./roman-to-integer.ts)

## Tests
[roman-to-integer.test.ts](./roman-to-integer.test.ts)
