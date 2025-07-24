# Subcadena más larga sin caracteres repetidos

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