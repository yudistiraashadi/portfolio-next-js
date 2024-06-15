"use client";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import {
  ColorSchemeScript,
  MantineProvider,
  DEFAULT_THEME,
  MantineProviderProps,
  defaultVariantColorsResolver,
  VariantColorsResolver,
  parseThemeColor,
} from "@mantine/core";

const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input);
  const parsedColor = parseThemeColor({
    color: input.color || input.theme.primaryColor,
    theme: input.theme,
  });

  if (
    parsedColor.isThemeColor &&
    parsedColor.color === "yellow" &&
    input.variant === "filled"
  ) {
    return {
      ...defaultResolvedColors,
      color: "var(--mantine-color-black)",
      hoverColor: "var(--mantine-color-black)",
    };
  }

  return defaultResolvedColors;
};

export default function MantineCustomProvider(props: MantineProviderProps) {
  return (
    <MantineProvider
      defaultColorScheme="dark"
      theme={{
        primaryColor: "yellow",
        primaryShade: {
          light: 6,
          dark: 4,
        },
        fontFamily: `${inter.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
        headings: {
          fontFamily: `${inter.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
        },
        variantColorResolver,
      }}
    >
      {props.children}
    </MantineProvider>
  );
}
