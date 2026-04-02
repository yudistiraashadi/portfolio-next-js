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
    <footer className="bg-background">
      <div id="contacts" className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-10 grid gap-10 sm:grid-cols-2">
          {/* Left: identity + availability */}
          <div>
            <p className="mb-1 text-base font-semibold">Yudistira Ashadi</p>
            <p className="font-mono mb-3 text-xs tracking-widest text-primary uppercase">
              CTO · Co-Founder · Software Engineer
            </p>
            <p className="max-w-xs text-sm text-muted-foreground">
              Available for enterprise projects, consulting, and freelance
              engagements across Indonesia and remotely.
            </p>
          </div>

          {/* Right: contact links */}
          <div>
            <p className="font-mono mb-4 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              Get in Touch
            </p>
            <ul className="flex flex-col gap-3">
              {contacts.map(({ href, label, icon: Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel={
                      href.startsWith("mailto")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
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
