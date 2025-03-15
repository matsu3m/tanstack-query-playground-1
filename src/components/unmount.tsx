import { Button, Grid } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

export const UnmountExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <Grid w="200px">
      <Grid.Col span={isOpen ? 6 : 12}>
        <Button onClick={toggleOpen} w={100}>
          {isOpen ? "Close <-" : "Open ->"}
        </Button>
      </Grid.Col>
      {isOpen && <SecondColumn />}
    </Grid>
  );
};

const SecondColumn = () => {
  const { mutate } = useMutation({
    mutationFn: async () =>
      await new Promise((resolve) => setTimeout(resolve, 3000)),
    onSuccess: () =>
      notifications.show({ message: "Success", position: "bottom-left" }),
  });

  const handleUpdate = () => mutate();

  return (
    <Grid.Col span={6}>
      <Button onClick={handleUpdate} w={100}>
        Update
      </Button>
    </Grid.Col>
  );
};
