export const getNextStep = (grid: number[][]): Promise<number[][]> =>
  fetch("http://localhost:5000/game/next-step", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(grid),
  })
    .then((res) => res.json())
    .then(({ data }) => data);
