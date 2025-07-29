# Subcadena más larga sin caracteres repetidos

## URL
[Enlace de Leet Code](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

Dada una cadena `s`, encuentra la longitud de la subcadena más larga sin caracteres repetidos.

**Ejemplo 1:**

```
Entrada: s = "abcabcbb"
Salida: 3
Explicación: La respuesta es "abc", con una longitud de 3.
```

**Ejemplo 2:**

```
Entrada: s = "bbbbb"
Salida: 1
Explicación: La respuesta es "b", con una longitud de 1.
```

**Ejemplo 3:**

```
Entrada: s = "pwwkew"
Salida: 3
Explicación: La respuesta es "wke", con una longitud de 3.
Observa que la respuesta debe ser una subcadena, "pwke" es una subsecuencia y no una subcadena.
```

**Restricciones:**

- `0 <= s.length <= 5 * 10^4`
- `s` consiste en letras inglesas, dígitos, símbolos y espacios.

## Solucion
```typescript
function lengthOfLongestSubstring(s: string): number {
  const stringLength = s.length;

  let longestLength = 0;

  for (var i = 0; i < stringLength; i++) {
    // Default values in visited are false
    const visited = new Array(256);

    for (var j = i; j < stringLength; j++) {
      const currentCharacterIsVisited = visited[s.charCodeAt(j)] === true;

      if (currentCharacterIsVisited) {
        break;
      }

      // Update the result if this window is larger
      longestLength = Math.max(longestLength, j - i + 1);

      // mark current character as visited.
      visited[s.charCodeAt(j)] = true;
    }
  }

  return longestLength;
}
````

## Código
[longest-substring-without-repeating-characters.ts](./longest-substring-without-repeating-characters.ts)

## Tests
[longest-substring-without-repeating-characters.test.ts](./longest-substring-without-repeating-characters.test.ts)
