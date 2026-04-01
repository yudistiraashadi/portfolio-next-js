import Link from "next/link";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const contacts = [
  {
    href: "mailto:distra96@gmail.com",
    label: "distra96@gmail.com",
    icon: Mail,
  },
  {
    href: "https://www.linkedin.com/in/yudistiraashadi/",
    label: "@yudistiraashadi",
    icon: Linkedin,
  },
  {
    href: "https://github.com/yudistiraashadi",
    label: "@yudistiraashadi",
    icon: Github,
  },
  {
    href: "https://x.com/yudistiraashadi",
    label: "@yudistiraashadi",
    icon: Twitter,
  },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border bg-background">
      <div
        id="contacts"
        className="mx-auto max-w-7xl px-4 py-16"
      >
        <div className="mb-10 flex flex-wrap justify-center gap-8">
          {contacts.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <Icon className="h-5 w-5" />
              <span className="text-sm">{label}</span>
            </Link>
          ))}
        </div>

        <Separator className="mb-6" />

        <div className="flex flex-col items-center gap-1 text-center text-xs text-muted-foreground sm:flex-row sm:justify-center sm:gap-2">
          <span>© {currentYear} Yudistira Ashadi</span>
          <span className="hidden sm:inline">·</span>
          <span>
            Powered by{" "}
            <Link
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-primary"
            >
              Next.js
            </Link>{" "}
            and{" "}
            <Link
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-primary"
            >
              Tailwind CSS
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
