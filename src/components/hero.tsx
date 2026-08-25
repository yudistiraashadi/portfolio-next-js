import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  FileText,
  Github,
  Linkedin,
  MapPin,
  Twitter,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button-variants";
import { AuroraBackground } from "@/components/aurora-background";

import photoYudis from "@/assets/images/photo_yudis.jpg";
import { profile } from "@/data/profile";

const socials = [
  {
    href: "https://www.linkedin.com/in/yudistiraashadi/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  { href: "https://github.com/yudistiraashadi", icon: Github, label: "GitHub" },
  { href: "https://x.com/yudistiraashadi", icon: Twitter, label: "X" },
] as const;

export function Hero() {
  return (
    <AuroraBackground className="border-border border-b">
      <div className="mx-auto max-w-7xl px-4 py-20 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-5">
          {/* Text */}
          <div className="lg:col-span-3">
            <p className="text-muted-foreground mb-4 font-mono text-xs tracking-widest uppercase">
              {profile.extendedHeadline}
            </p>

            <h1 className="mb-5 max-w-3xl text-4xl leading-[1.08] font-light tracking-tight lg:text-5xl xl:text-6xl">
              Building production AI,
              <br />
              data &amp; SaaS systems
              <br />
              <span className="font-extrabold">
                from ambiguity to{" "}
                <span className="bg-primary text-primary-foreground px-1">
                  impact.
                </span>
              </span>
            </h1>

            <p className="text-foreground mb-4 max-w-2xl text-lg leading-relaxed font-medium">
              {profile.introduction}
            </p>
            <p className="text-muted-foreground mb-6 max-w-2xl text-base leading-relaxed lg:text-lg">
              {profile.summary}
            </p>

            <p className="text-muted-foreground mb-8 flex items-center gap-2 text-sm">
              <MapPin className="text-primary h-4 w-4" aria-hidden="true" />
              {profile.location}
            </p>

            <div className="mb-8 flex flex-wrap gap-3">
              <Link href="#experience" className={buttonVariants()}>
                Explore my experience
                <ArrowDown className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href={profile.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "outline" })}
              >
                <FileText className="mr-1 h-4 w-4" aria-hidden="true" />
                View CV
              </Link>
              <Link
                href="/portfolio"
                className={buttonVariants({ variant: "ghost" })}
              >
                Selected projects →
              </Link>
            </div>

            <div className="flex items-center gap-5">
              {socials.map(({ href, icon: Icon, label }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:col-span-2 lg:justify-end">
            <div className="border-primary bg-muted relative h-64 w-64 overflow-hidden rounded-xl border-2 shadow-[12px_12px_0_var(--primary)] lg:h-80 lg:w-80">
              <Image
                src={photoYudis}
                alt="Yudistira Ashadi"
                fill
                sizes="(max-width: 1024px) 256px, 320px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}
