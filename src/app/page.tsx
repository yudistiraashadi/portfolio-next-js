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

import photoYudis from "@/assets/images/photo_yudis.jpg";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <section>
        <div>
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

                  <h1 className="mb-16 text-3xl font-bold lg:text-5xl">
                    I'm a{" "}
                    <Highlight>
                      <span className="lg:px-4">Web Developer</span>
                    </Highlight>
                  </h1>

                  <h2 className="mb-4 text-xl font-semibold lg:text-2xl">
                    Specializing in PHP, Next.JS, React, and React Native
                  </h2>

                  <p className="text-sm lg:text-base">
                    I'm a software engineer based in Indonesia. I've been
                    creating hybrid mobile apps and website using PHP, React
                    Native, and React since 2017. I have created dozens of
                    mobile apps and websites for clients like governments and
                    multinational companies.
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

                    <Link
                      href={"https://x.com/yudistiraashadi"}
                      target="_blank"
                    >
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
        </div>
      </section>
    </>
  );
}
