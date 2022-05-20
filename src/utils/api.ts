export const getNextStep = (grid: number[][]): Promise<number[][]> =>
  fetch(`${process.env.REACT_APP_API_URL}/game/next-step`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(grid),
  })
    .then((res) => res.json())
    .then(({ data }) => data);
