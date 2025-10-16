import Image from "next/image";
import Link from "next/link";

import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandX,
} from "@tabler/icons-react";

import { Highlight, HeroHighlight } from "@/components/hero-highlight";
import { Meteors } from "@/components/meteors";
import { Container } from "@/components/container";
import { PortfolioCard } from "@/components/portfolio";
import { FlipWords } from "@/components/flip-words";

import photoYudis from "@/assets/images/photo_yudis.jpg";

import { portfolioData } from "@/data/portfolio";
import { workData, monthNames } from "@/data/work";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero section */}
      <HeroHighlight>
        <Container>
          <div className="relative grid h-full min-h-[40rem] gap-4 overflow-clip py-4 lg:grid-cols-5">
            <Meteors number={10} />

            <div className="flex flex-col justify-center lg:col-span-3">
              <h2 className="text-xl font-bold leading-none lg:text-2xl">
                Hello &#x1F44B;,
              </h2>
              <h2 className="mb-12 text-xl font-bold lg:text-2xl">
                My name is Yudistira Ashadi
              </h2>

              <div className="text-xl font-bold lg:text-2xl">I&apos;m a</div>
              <div className="mb-16 text-3xl font-bold lg:text-5xl">
                <FlipWords
                  className="rounded-lg bg-gradient-to-r from-orange-300 to-yellow-300 p-2 lg:px-4 dark:from-orange-500 dark:to-yellow-500"
                  words={[
                    "Full Stack Developer",
                    "AI Integration Specialist",
                    "Web Application Expert",
                    "Software Engineer",
                    "React Native Developer",
                  ]}
                />
              </div>

              <h2 className="mb-4 text-xl font-semibold lg:text-2xl">
                Building Modern Web Applications with AI-Powered Solutions
              </h2>

              <p className="text-sm lg:text-base">
                I&apos;m a full-stack software engineer based in Indonesia with
                over 10 years of experience. I specialize in building scalable
                web applications using Next.js, React, and modern software
                technologies, while integrating AI capabilities to create
                intelligent, user-centric solutions. My expertise spans from
                developing enterprise-grade web platforms to creating innovative
                mobile apps for governments and multinational companies.
              </p>

              {/* socials  */}
              <div className="mt-12 flex items-center space-x-8">
                <Link
                  href={"https://www.linkedin.com/in/yudistiraashadi/"}
                  target="_blank"
                >
                  {/* edit the icon so that it resize bigger and glow when hoverring */}
                  <IconBrandLinkedin
                    size={40}
                    className="duration-200 hover:scale-150 hover:text-yellow-500"
                  />
                </Link>

                <Link
                  href={"https://github.com/yudistiraashadi"}
                  target="_blank"
                >
                  <IconBrandGithub
                    size={35}
                    className="duration-200 hover:scale-150 hover:text-yellow-500"
                  />
                </Link>

                <Link href={"https://x.com/yudistiraashadi"} target="_blank">
                  <IconBrandX
                    size={35}
                    className="duration-200 hover:scale-150 hover:text-yellow-500"
                  />
                </Link>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center lg:col-span-2 lg:mt-0">
              <div className="w-80 overflow-clip rounded-lg border-4 border-yellow-500 lg:w-96">
                <Image
                  src={photoYudis.src}
                  alt="Yudis' Profile Picture"
                  width={200}
                  height={200}
                  className="w-full object-contain"
                />
              </div>
            </div>
          </div>
        </Container>
      </HeroHighlight>

      {/* Featured portfolio */}
      <Container className="space-y-12 p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold lg:text-4xl">Featured Portfolio</h2>

          <Link
            href="/portfolio"
            className="flex-shrink-0 text-sm font-semibold text-yellow-500 hover:underline"
          >
            View all portfolio &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {portfolioData
            .filter((portfolio) => portfolio.priority)
            .slice(0, 8)
            .map((portfolio) => (
              <PortfolioCard
                key={portfolio.title}
                portfolio={portfolio}
                className="min-h-[30rem]"
              />
            ))}
        </div>
      </Container>

      {/* work experience */}
      <Container className="space-y-12 overflow-hidden rounded-lg border-2 border-[#eaeaea] bg-zinc-50 p-4 dark:border dark:border-neutral-600 dark:bg-zinc-900">
        <h2 className="text-2xl font-bold lg:text-4xl">Work Experience</h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {workData.slice(0, 4).map((work) => (
            <div
              key={work.companyName}
              className="flex flex-col justify-between space-y-4"
            >
              <div className="flex space-x-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-clip rounded-lg bg-white">
                  <Image
                    src={work.companyLogo}
                    alt={`${work.companyName} Logo`}
                    width={200}
                    height={200}
                    className="w-full flex-shrink-0 object-cover"
                  />
                </div>

                <div>
                  <h3 className="mb-1 text-lg font-bold leading-tight">
                    {work.companyName}
                  </h3>
                  <p className="text-sm">{work.jobTitle}</p>
                </div>
              </div>

              <p className="text-sm">
                {monthNames[work.monthStart]} {work.yearStart} -{" "}
                {work.yearEnd
                  ? (work.monthEnd ? monthNames[work.monthEnd] + " " : "") +
                    work.yearEnd
                  : "Present"}
              </p>
            </div>
          ))}
        </div>

        {/* go to linkedin button */}
        <Link
          href={"https://www.linkedin.com/in/yudistiraashadi/"}
          target="_blank"
          rel="noopener"
          className="flex w-full items-center justify-center rounded-lg border border-yellow-500 p-4 font-semibold text-yellow-500 duration-200 hover:bg-yellow-500 hover:text-black hover:underline"
        >
          Go to LinkedIn &rarr;
        </Link>
      </Container>
    </div>
  );
}
