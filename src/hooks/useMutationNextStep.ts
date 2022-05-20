import { useMutation } from "react-query";

import { getNextStep } from "../utils/api";

export interface UseMutationNextStepParams {
  grid: number[][];
}

const useMutationNextStep = () =>
  useMutation<number[][], unknown, number[][]>(getNextStep);

export default useMutationNextStep;
