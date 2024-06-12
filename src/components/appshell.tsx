"use client";

import { AppShell, rem, Button, NavLink, Box, Burger } from "@mantine/core";
import { useHeadroom, useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import dynamic from "next/dynamic";
const ToggleTheme = dynamic(() => import("./theme"));

import photoProfile from "@/assets/images/photo_profile.jpg";

export function DefaultAppShell({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();
  const pathname = usePathname();
  const pinned = useHeadroom({ fixedAt: 140 });

  return (
    <AppShell
      header={{ height: 80, collapsed: !pinned, offset: false }}
      navbar={{
        width: 300,
        breakpoint: "lg",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
      withBorder={false}
    >
      <AppShell.Header>
        <div className="flex h-full w-full items-center justify-center bg-zinc-50 transition-colors duration-200 ease-in-out dark:bg-black dark:text-white">
          <div className="relative flex w-full max-w-7xl items-center justify-between px-2">
            {/* burger menu */}
            <div className="flex items-center space-x-2">
              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="lg"
                size="sm"
              />

              <Link
                href={"/"}
                className="flex items-center justify-center gap-3 rounded-md p-2 transition-all duration-200 ease-in-out hover:bg-yellow-500/10 hover:ring-1 hover:ring-yellow-500"
              >
                <div className="h-8 w-8 overflow-hidden rounded-full border">
                  <Image
                    src={photoProfile.src}
                    alt="Yudis' Profile Picture"
                    width={200}
                    height={200}
                    className="w-full object-contain"
                  />
                </div>
                <div className="font-semibold">Yudistira Ashadi</div>
              </Link>
            </div>

            <Box
              visibleFrom="lg"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform space-x-2"
            >
              <Button
                component={Link}
                href="/"
                size="xs"
                radius="xl"
                variant={pathname === "/" ? "filled" : "subtle"}
                classNames={{
                  label: "text-black dark:text-inherit",
                }}
              >
                Home
              </Button>
              <Button
                component={Link}
                href="/portfolio"
                size="xs"
                radius="xl"
                variant={
                  pathname.startsWith("/portfolio") ? "filled" : "subtle"
                }
                classNames={{
                  label: "text-black dark:text-inherit",
                }}
              >
                Portfolio
              </Button>
              <Button
                component={Link}
                href="/blog"
                size="xs"
                radius="xl"
                variant={pathname.startsWith("/blog") ? "filled" : "subtle"}
                classNames={{
                  label: "text-black dark:text-inherit",
                }}
              >
                Blogs
              </Button>
              <Button
                component={Link}
                href="/contacts"
                size="xs"
                radius="xl"
                variant={pathname.startsWith("/contacts") ? "filled" : "subtle"}
                classNames={{
                  label: "text-black dark:text-inherit",
                }}
              >
                Contacts
              </Button>
            </Box>

            <ToggleTheme />
          </div>
        </div>
      </AppShell.Header>

      <AppShell.Navbar p="xs" mt={80}>
        <NavLink
          label="Home"
          onClick={toggle}
          component={Link}
          href="/"
          active={pathname === "/"}
        />

        <NavLink
          label="Portfolio"
          onClick={toggle}
          component={Link}
          href="/portfolio"
          active={pathname.startsWith("/portfolio")}
        />

        <NavLink
          label="Blogs"
          onClick={toggle}
          component={Link}
          href="/blog"
          active={pathname.startsWith("/blog")}
        />

        <NavLink
          label="Contacts"
          onClick={toggle}
          component={Link}
          href="/contacts"
          active={pathname.startsWith("/contacts")}
        />
      </AppShell.Navbar>

      <AppShell.Main
        className="bg-zinc-50 transition-colors duration-200 ease-in-out dark:bg-black dark:text-white"
        pt={`calc(${rem(100)} + var(--mantine-spacing-md))`}
      >
        {children}
      </AppShell.Main>
    </AppShell>
  );
}
