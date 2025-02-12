import Header from "@/components/layout/Header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto container">
      <Header />
      <main>
        <section className="py-24">
          <p className="text-4xl sm:text-5xl font-bold tracking-tighter text-center">Dedicated to building websites <br />that excel, delivering quality that stands out in every detail.</p>
        </section>
        <section className="flex justify-center flex-wrap gap-16 py-24">
          <div className="flex flex-col items-center">
            <span className="font-bold text-4xl">+6</span>
            <span className="text-zinc-400">Years of experience</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-4xl">5</span>
            <span className="text-zinc-400">Years of study</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-4xl">4</span>
            <span className="text-zinc-400">Different company</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-4xl">1</span>
            <span className="text-zinc-400">Master&apos;s degree</span>
          </div>
        </section>
        <section className="py-24">
          <h2 className="font-alt text-xl font-bold mb-4">About me</h2>
          <p>Freelance Fullstack Developer specialized in modern technologies such as Next.js, React, Vue.js, and TypeScript. With expertise in both frontend and backend development, I help my clients build high-performance, scalable applications optimized for user experience.</p>
        </section>
        <section className="py-24">
          <h2 className="font-alt text-xl font-bold mb-4">Recent work</h2>
          <article className="flex flex-col md:flex-row gap-8 mb-16">
            <Image src="/projet-decode.png" alt="Profile picture" className="w-full md:w-auto" width={400} height={200} />
            <div className="flex flex-col items-start grow gap-4">
              <div className="flex justify-between w-full">
                <h3 className="font-semibold">Design System Decode</h3>
                <a href="https://github.com/decode-school/design-system">
                  <Image src={"/github.svg"} alt="Github" width={24} height={24} />
                </a>
              </div>
              <p className="grow">A fully integrated design system in React matching Decode school&apos;s needs.</p>
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <div className="size-2 bg-blue-600 rounded-full"></div>
                  <span>Typescript</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-2 bg-blue-400 rounded-full"></div>
                  <span>React</span>
                </div>
              </div>
            </div>
          </article>
          <article className="flex flex-col md:flex-row gap-8 mb-16">
            <Image src="/projet-challenger.png" alt="Profile picture" className="w-full md:w-auto" width={400} height={200} />
            <div className="flex flex-col items-start grow gap-4">
              <div className="flex justify-between w-full">
                <h3 className="font-semibold">Challenger</h3>
                <a href="https://github.com/SebGrd/challenger">
                  <Image src={"/github.svg"} alt="Github" width={24} height={24} />
                </a>
              </div>
              <p className="grow">Challenger is a desktop app for League of Legends players, offering advanced challenge tracking, personalized progress analytics, and real-time updates such as in-game challenge suggestions.</p>
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <div className="size-2 bg-blue-600 rounded-full"></div>
                  <span>Typescript</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-2 bg-blue-400 rounded-full"></div>
                  <span>React</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-2 bg-cyan-400 rounded-full"></div>
                  <span>Electron</span>
                </div>
              </div>
            </div>
          </article>
          <article className="flex flex-col md:flex-row gap-8 mb-16">
            <Image src="/projet-music.png" alt="Profile picture" className="w-full md:w-auto" width={400} height={200} />
            <div className="flex flex-col items-start grow gap-4">
              <div className="flex justify-between w-full">
                <h3 className="font-semibold">Music App</h3>
                <a href="https://github.com/SebGrd/spotify-music-app">
                  <Image src={"/github.svg"} alt="Github" width={24} height={24} />
                </a>
              </div>
              <p className="grow">A Spotify client with UX/UI design in mind.</p>
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <div className="size-2 bg-blue-600 rounded-full"></div>
                  <span>Typescript</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-2 bg-foreground rounded-full"></div>
                  <span>Next.js</span>
                </div>
              </div>
            </div>
          </article>
        </section>
        <section className="py-24">
          <h2 className="font-alt text-xl font-bold mb-4">Q&A</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Why such a simple website as your portfolio?</AccordionTrigger>
              <AccordionContent>
                Well, there are two schools of portfolio, the impressive ones that are stylish and the efficient ones that are easy to read and navigate for you reading this 😉
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Do you prefer front-end or back-end?</AccordionTrigger>
              <AccordionContent>
                Front-end, from far. But i also love working on some back-end if it&apos;s on a techno that i like.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Any mobile app skills or project?</AccordionTrigger>
              <AccordionContent>
                I actually did some project of this kind. I first started doing Mobile first PWAs to get me into that “mobile feeling” of UI. Then i did some real mobile dev, i started learning Flutter in school, didn&apos;t like it 🥴 I will try React Native, a platform that i should be way familiar with.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

        </section>
      </main>
    </div>
  );
}
