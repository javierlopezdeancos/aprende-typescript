# Rompiendo los récords (Breaking Records)

## Solución

```typescript
function breakingRecords(scores: number[]): number[] {
  let min = scores[0];
  let max = scores[0];
  let lessThanMin = 0;
  let moreThanMax = 0;

  for (let s = 0; s < scores.length; s++) {
    const score = scores[s];

    if (s === 0) {
      min = scores[0];
      max = scores[0];
    }

    if (s > 0) {
      if (score < min) {
        lessThanMin++;
        min = score;
      } else if (score > max) {
        moreThanMax++;
        max = score;
      }
    }
  }

  return [moreThanMax, lessThanMin];
}
````

## Código
[breaking-records.ts](./breaking-records.ts)

## Tests
[breaking-records.test.ts](./breaking-records.test.ts)
