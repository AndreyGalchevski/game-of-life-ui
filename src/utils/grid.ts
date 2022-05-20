export const countLiveCells = (grid: number[][]) => {
  let sum = 0;

  for (const row of grid) {
    for (const cell of row) {
      sum += cell;
    }
  }

  return sum;
};
