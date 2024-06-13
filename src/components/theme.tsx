"use client";

import {
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";

export default function ToggleTheme() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };

  return (
    <ActionIcon
      color={"yellow"}
      radius="xl"
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
      className={"cursor-pointers"}
    >
      {computedColorScheme === "dark" ? (
        <IconSun size="1.1rem" />
      ) : (
        <IconMoon size="1.1rem" />
      )}
    </ActionIcon>
  );
}
