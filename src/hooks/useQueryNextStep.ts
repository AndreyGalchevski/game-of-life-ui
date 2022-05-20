import { useQuery } from "react-query";
import { getNextStep } from "../utils/api";

interface UseQueryNextStepOptions {
  enabled?: boolean;
  shouldPoll?: boolean;
  onSuccess?: (data: any) => void;
}

const useQueryNextStep = (
  grid: number[][],
  { enabled = true, shouldPoll = false, onSuccess }: UseQueryNextStepOptions
) =>
  useQuery("next-step", () => getNextStep(grid), {
    enabled,
    refetchInterval: shouldPoll ? 300 : undefined,
    onSuccess,
  });

export default useQueryNextStep;
