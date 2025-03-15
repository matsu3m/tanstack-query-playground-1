import { Button } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useMutation } from "@tanstack/react-query";

export const MultipleCallsExample = () => {
  const { mutate } = useMutation({
    mutationFn: async () =>
      await new Promise((resolve) => setTimeout(resolve, 3000)),
    onSuccess: () =>
      notifications.show({ message: "Success", position: "bottom-left" }),
  });

  const handleUpdate = () => mutate();

  return (
    <Button onClick={handleUpdate} w={100}>
      Update
    </Button>
  );
};
