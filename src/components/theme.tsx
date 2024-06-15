"use client";

import {
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";

export default function ToggleTheme() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("dark", {
    getInitialValueInEffect: true,
  });

  return (
    <ActionIcon
      color={"yellow"}
      radius="xl"
      onClick={() =>
        setColorScheme(computedColorScheme === "light" ? "dark" : "light")
      }
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
