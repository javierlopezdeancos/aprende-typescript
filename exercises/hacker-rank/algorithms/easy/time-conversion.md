# Conversión de hora

Echa un vistazo a la descripción completa del [ejercicio en HackerRank](https://www.hackerrank.com/challenges/time-conversion)

Dada una hora en formato de 12 horas AM/PM, conviértela a formato militar (24 horas).

Nota: - 12:00:00AM en un reloj de 12 horas es 00:00:00 en un reloj de 24 horas.

- 12:00:00PM en un reloj de 12 horas es 12:00:00 en un reloj de 24 horas.

**Ejemplo**

* s = `12:01:00:PM`

Devuelve `12:01:00`.

* s = `12:01:00:AM`

Devuelve `00:01:00`.

**Descripción de la función**

Completa la función `timeConversion` en el editor de abajo. Debe devolver una nueva cadena que represente la hora de entrada en formato de 24 horas.

`timeConversion` tiene los siguientes parámetros:

* string s: una hora en formato de *12* horas

**Devuelve**

* string: la hora en formato de *24* horas

**Formato de entrada**

Una única cadena que representa una hora en formato de reloj de 12 horas (es decir, *hh:mm:ssAM* o *hh:mm:ssPM*).

**Restricciones**

* Todas las horas de entrada son válidas

**Ejemplo de entrada 0**

```
07:05:45PM
```

**Ejemplo de salida 0**

```
19:05:45
```