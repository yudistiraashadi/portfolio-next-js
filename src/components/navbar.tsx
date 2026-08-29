"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { Menu } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/utils/cn";

import photoProfile from "@/assets/images/photo_profile.jpg";
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/portfolio" },
  { label: "Contact", href: "/#contacts" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const prevY = useRef(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > prevY.current && latest > 80) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    prevY.current = latest;
  });

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.includes("#")) return false;
    return pathname.startsWith(href);
  };

  return (
    <motion.header
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="border-border bg-background/95 supports-[backdrop-filter]:bg-background/60 fixed top-0 z-50 w-full border-b backdrop-blur"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-md p-1 transition-opacity hover:opacity-80"
        >
          <div className="border-border h-7 w-7 overflow-hidden rounded-full border">
            <Image
              src={photoProfile}
              alt="Yudistira Ashadi"
              width={28}
              height={28}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <div className="text-sm leading-none font-semibold">
              Yudistira Ashadi
            </div>
            <div className="text-muted-foreground font-mono text-[9px]">
              Senior Full-Stack &amp; AI Engineer
            </div>
          </div>
        </Link>

        {/* Desktop nav — center */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "text-muted-foreground hover:text-foreground rounded-full text-sm",
                isActive(link.href) &&
                  "border-primary text-foreground rounded-none border-b-2 pb-0",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile burger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 lg:hidden"
                  aria-label="Open menu"
                />
              }
            >
              <Menu className="h-4 w-4" />
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <SheetHeader>
                <SheetTitle className="text-left text-sm font-semibold">
                  Yudistira Ashadi
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      buttonVariants({
                        variant: isActive(link.href) ? "secondary" : "ghost",
                      }),
                      "justify-start",
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
