"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import { Button } from "@/components/ui/button";
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
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "#contacts" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [prevY, setPrevY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > prevY && latest > 80) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setPrevY(latest);
  });

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("#")) return false;
    return pathname.startsWith(href);
  };

  return (
    <motion.header
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="fixed top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-md p-1 transition-opacity hover:opacity-80"
        >
          <div className="h-7 w-7 overflow-hidden rounded-full border border-border">
            <Image
              src={photoProfile}
              alt="Yudistira Ashadi"
              width={28}
              height={28}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <div className="text-sm font-semibold leading-none">
              Yudistira Ashadi
            </div>
            <div className="font-mono text-[9px] text-muted-foreground">
              CTO &amp; Co-founder
            </div>
          </div>
        </Link>

        {/* Desktop nav — center */}
        <nav className="hidden items-center gap-1 sm:flex">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              size="sm"
              asChild
              className={cn(
                "rounded-full text-sm text-muted-foreground hover:text-foreground",
                isActive(link.href) &&
                  "border-b-2 border-primary text-foreground rounded-none pb-0",
              )}
            >
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="hidden text-sm text-muted-foreground hover:text-foreground sm:inline-flex"
          >
            <Link
              href="https://grahateknologimaju.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Our Agency ↗
            </Link>
          </Button>

          <ThemeToggle />

          {/* Mobile burger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 sm:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <SheetHeader>
                <SheetTitle className="text-left text-sm font-semibold">
                  Yudistira Ashadi
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Button
                    key={link.href}
                    variant={isActive(link.href) ? "secondary" : "ghost"}
                    className="justify-start"
                    asChild
                    onClick={() => setMobileOpen(false)}
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                ))}
                <Button
                  variant="ghost"
                  className="justify-start text-muted-foreground"
                  asChild
                  onClick={() => setMobileOpen(false)}
                >
                  <Link
                    href="https://grahateknologimaju.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Our Agency ↗
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
