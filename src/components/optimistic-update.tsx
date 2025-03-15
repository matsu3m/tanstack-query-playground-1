import { Chip } from "@mantine/core";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getPinStatus, updatePinStatus } from "../api/optimistic-update";

export const OptimisticUpdateExample = () => {
  const queryClient = useQueryClient();

  const { data } = useQuery({ queryKey: ["pinStatus"], queryFn: getPinStatus });

  const { mutate, isPending } = useMutation({
    mutationFn: () => updatePinStatus(!data?.pinStatus),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["pinStatus"] }),
  });

  const handleToggle = () => mutate();

  const displayPinnedStatus = isPending ? !data?.pinStatus : data?.pinStatus;

  return (
    <Chip checked={displayPinnedStatus} onChange={handleToggle}>
      {displayPinnedStatus ? "Pinned" : "Unpinned"}
    </Chip>
  );
};
