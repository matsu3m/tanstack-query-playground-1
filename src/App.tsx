import { Stack, Text } from "@mantine/core";
import { MultipleCallsExample } from "./components/multiple-calls";
import { OptimisticUpdateExample } from "./components/optimistic-update";
import { UnmountExample } from "./components/unmount";

export const App = () => {
  return (
    <Stack gap="xl" p="xl">
      <Stack gap="xs">
        <Text fw={700} size="lg">
          Optimistic Updates via the UI
        </Text>
        <OptimisticUpdateExample />
      </Stack>
      <Stack gap="xs">
        <Text fw={700} size="lg">
          Unmount
        </Text>
        <UnmountExample />
      </Stack>
      <Stack gap="xs">
        <Text fw={700} size="lg">
          Multiple Calls
        </Text>
        <MultipleCallsExample />
      </Stack>
    </Stack>
  );
};
