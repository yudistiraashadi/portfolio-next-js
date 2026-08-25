import Link from "next/link";
import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { profile } from "@/data/profile";

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
  { href: profile.cvPath, label: "View résumé / CV", icon: FileText },
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
            <p className="text-foreground dark:text-primary mb-3 font-mono text-xs tracking-widest uppercase">
              {profile.extendedHeadline}
            </p>
            <p className="text-muted-foreground max-w-xs text-sm">
              Open to senior and lead engineering roles, technical leadership,
              consulting, and ambitious product collaborations.
            </p>
          </div>

          {/* Right: contact links */}
          <div>
            <p className="text-muted-foreground mb-4 font-mono text-xs font-semibold tracking-widest uppercase">
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
                    className="text-muted-foreground hover:text-primary flex items-center gap-2 text-sm transition-colors"
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

        <div className="text-muted-foreground flex flex-col items-center gap-1 text-center text-xs sm:flex-row sm:justify-center sm:gap-2">
          <span>© {currentYear} Yudistira Ashadi</span>
          <span className="hidden sm:inline">·</span>
          <span>
            Powered by{" "}
            <Link
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary underline underline-offset-2"
            >
              Next.js
            </Link>{" "}
            and{" "}
            <Link
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary underline underline-offset-2"
            >
              Tailwind CSS
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
