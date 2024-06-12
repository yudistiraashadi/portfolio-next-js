import Image from "next/image";

import { Highlight, HeroHighlight } from "@/components/ui/hero-highlight";
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
              <div className="grid h-full min-h-[40rem] gap-4 lg:grid-cols-5">
                <div className="flex flex-col justify-center lg:col-span-3">
                  <h2 className="mb-2 text-2xl font-bold">Hello &#x1F44B;,</h2>

                  <h1 className="mb-8 text-5xl font-bold">
                    I'm a{" "}
                    <Highlight>
                      <span className="px-4">React Developer</span>
                    </Highlight>
                  </h1>

                  <h2 className="mb-12 text-2xl font-semibold">
                    Specializing in Next.JS, React, and React Native
                  </h2>

                  <p>
                    I'm <span className="font-bold">Yudistira Ashadi</span> a
                    software engineer based in Indonesia. I've been creating
                    hybrid mobile apps and website using React Native, React,
                    and PHP since 2017. I have created dozens of mobile apps and
                    websites for clients like governments and multinational
                    companies.
                  </p>
                </div>

                <div className="flex items-center justify-center lg:col-span-2">
                  <div className="w-80 overflow-clip rounded-md border-4 border-yellow-500 lg:w-96">
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
