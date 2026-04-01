import Image from "next/image";
import Link from "next/link";
import { Linkedin, Github, Twitter } from "lucide-react";

import { buttonVariants } from "@/components/ui/button-variants";
import { AuroraBackground } from "@/components/aurora-background";

import photoYudis from "@/assets/images/photo_yudis.jpg";

const socials = [
  { href: "https://www.linkedin.com/in/yudistiraashadi/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/yudistiraashadi", icon: Github, label: "GitHub" },
  { href: "https://x.com/yudistiraashadi", icon: Twitter, label: "X" },
] as const;

export function Hero() {
  return (
    <AuroraBackground className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-5">
          {/* Text */}
          <div className="lg:col-span-3">
            <p className="font-mono mb-4 text-xs tracking-widest text-muted-foreground uppercase">
              CTO · Co-founder · Software Engineer
            </p>

            <h1 className="mb-4 text-4xl font-light leading-tight tracking-tight lg:text-5xl xl:text-6xl">
              Building technology
              <br />
              <span className="font-extrabold">
                that{" "}
                <span className="bg-primary px-1 text-primary-foreground">
                  scales.
                </span>
              </span>
            </h1>

            <p className="mb-8 max-w-lg text-base leading-relaxed text-muted-foreground lg:text-lg">
              Co-founder &amp; CTO of{" "}
              <Link
                href="https://grahateknologimaju.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-2 hover:text-primary"
              >
                Graha Teknologi Maju
              </Link>
              . Full-stack software engineer with 10+ years delivering enterprise
              web platforms, AI-powered solutions, and mobile applications for
              governments and multinational companies across Indonesia.
            </p>

            <div className="mb-8 flex flex-wrap gap-3">
              <Link href="/portfolio" className={buttonVariants()}>
                View Projects →
              </Link>
              <Link
                href="https://grahateknologimaju.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "outline" })}
              >
                Our Agency ↗
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
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:col-span-2 lg:justify-end">
            <div className="relative h-64 w-64 overflow-hidden rounded-xl border-2 border-primary lg:h-80 lg:w-80">
              <Image
                src={photoYudis}
                alt="Yudistira Ashadi"
                fill
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
