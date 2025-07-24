# Subiendo en la tabla de clasificación

Un jugador de un juego de arcade quiere subir a lo más alto de la tabla de clasificación y seguir su ranking. El juego utiliza el [Ranking Denso](https://en.wikipedia.org/wiki/Ranking#Dense_ranking_.28.221223.22_ranking.29), por lo que su tabla de clasificación funciona así:

- El jugador con la puntuación más alta ocupa el puesto número 1 en la tabla de clasificación.
- Los jugadores que tienen la misma puntuación reciben el mismo número de ranking, y el siguiente jugador o jugadores reciben el número de ranking inmediatamente siguiente.

**Ejemplo**

clasificado = [100, 90, 90, 80]
jugador = [70, 80, 105]

Los jugadores clasificados tendrán los rangos **_1_**, **_2_**, **_2_** y **_3_**, respectivamente. Si las puntuaciones del jugador son **_70_**, **_80_** y **_105_**, sus clasificaciones después de cada partida son **_4ª_**, **_3ª_** y **_1ª_**. Devuelve **_[4, 3, 2]_**.

**Descripción de la función**

`climbingLeaderboard` tiene los siguientes parámetros:

- int ranked[n]: las puntuaciones de la tabla de clasificación
- int player[m]: las puntuaciones del jugador

**Devuelve**

- int[m]: el rango del jugador después de cada nueva puntuación

**Formato de entrada**

La primera línea contiene un entero **_n_**, el número de jugadores en la tabla de clasificación.

La siguiente línea contiene **_n_** enteros separados por espacios **_ranked[i]_**, las puntuaciones de la tabla de clasificación en orden decreciente.

La siguiente línea contiene un entero **_m_**, el número de partidas que juega el jugador.

La última línea contiene **_m_** enteros separados por espacios **_player[j]_**, las puntuaciones de las partidas.

**Restricciones**

- 1 <= n <= 2 x 10^5
- 1 <= m <= 2 x 10^5
- 1 <= ranked[i] <= 10^9 para 0 <= i < n
- 1 <= player[j] <= 10^9 para 0 <= j < n
- La tabla de clasificación existente, **_ranked_**, está en orden descendente.
- Las puntuaciones del jugador, **_player_**, están en orden ascendente.

**Subtarea**

Para el 60% de la puntuación máxima:

- 1 <= n <= 200
- 1 <= m <= 200