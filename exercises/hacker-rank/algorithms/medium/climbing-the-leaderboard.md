# Subiendo en la tabla de clasificación

## URL

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

```text
const rankingScores = [100, 90, 90, 80]
const playerScores = [70, 80, 105]

return [4, 3, 1]

-------------------------------------------------------
playerRanking = []
playerScores = [70, 80]
playerScore = 105
uniques = 0

for
(LOOP 1)
  i = 0
  rankingScore = 100
  previousRankingScore = undefined

  if rankingScore !== previousRankingScore /  100 !== undefined --> NO
    uniques = 1

    while  playerScore >= rankingScore  /  105 >= 100 --> YES
      playerRanking = [1]
      playerScores = [70]
      playerScore = 80

    if i (0) === rankingScores.length (4) - 1  (3) /  0 === 0 --> NO

(LOOP 2)
  i = 1
  rankingScore = 90
  previousRankingScore = 100

  if currentRankingScoreIsEqualToThePreviousOne  /  90 !== 100 --> NO
    uniques = 2

    while  playerScore >= rankingScore  /  105 >= 100  --> YES
      playerRanking = [1]
      playerScores = [70]
      playerScore = 80

    if i (1) === rankingScores.length (4) - 1  (3) /  1 === 3 --> NO
```

## Solución

```typescript
function climbingLeaderBoard(rankingScores: number[], playerScores: number[]): number[] | undefined {
  let playerRanking = [];

  for (let i = 0, playerScore = playerScores.pop(), uniques = 0; i < rankingScores.length; ++i) {
    let rankingScore = rankingScores[i];
    const previousRankingScore = rankingScores[i - 1];

    if (rankingScore !== previousRankingScore) {
      ++uniques;

      while (playerScore && playerScore >= rankingScore) {
        playerRanking.unshift(uniques);
        playerScore = playerScores.pop();
      }

      if (!playerScore) {
        continue;
      }

      if (i == rankingScores.length - 1) {
        playerRanking.unshift(...new Array(playerScores.length + 1).fill(++uniques));
      }
    }
  }

  return playerRanking;
}
````

## Código
[climbing-the-leaderboard.ts](./climbing-the-leaderboard.ts)

## Tests
[climbing-the-leaderboard.test.ts](./climbing-the-leaderboard.test.ts)
