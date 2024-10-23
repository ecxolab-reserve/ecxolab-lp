import Image from "next/image";

import Isologo from "@/assets/logos/isologo-colorful.svg";
import Logo from "@/assets/logos/logo-colorful.svg";
import { Button } from "@/components/ui/button";
import {
  Bookmark,
  Braces,
  ChevronRight,
  PenTool,
  Rocket,
  Share2,
  User2,
} from "lucide-react";

export default function LandingPage() {
  return (
    <main className="container max-w-[1200px] mx-auto">
      <header className="flex w-full justify-between items-center p-8 sm:px-0 sm:py-8">
        <Image src={Logo} width={160} alt="Logo ECXOLAB" />
        <div>
          <Button>About</Button>
          <Button>Projects</Button>
          <Button variant={"gradient"} className="group">
            Contact us
            <ChevronRight className="group-hover:translate-x-0.5 transition" />
          </Button>
        </div>
      </header>

      <section className="flex flex-col items-center gap-8 py-16">
        <div className="flex items-center gap-2 text-gray-600 text-sm bg-gray-950 px-4 py-2 rounded-full bg-opacity-50">
          <Image src={Isologo} width={14} alt="Isologo ECXOLAB" />
          <span>Your challenges, our solutions.</span>
        </div>
        <div className="mt-4">
          <h1
            className={`font-[var(--font-engobe-sans)] text-4xl -mt-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500`}
          >
            <p className="leading-[4]">Unleashing Digital</p>{" "}
            <p className="-mt-12">Innovation</p>
          </h1>
          <p className="text-center text-gray-600">
            At Ecxolab, we blend creativity with technology to craft digital{" "}
            <br />
            experiences that resonate. Explore our work and see how <br /> we
            bring ideas to life.
          </p>
        </div>
        <div className="space-x-4">
          <Button variant={"gradient"} className="group">
            Contact us
            <ChevronRight className="group-hover:translate-x-0.5 transition" />
          </Button>
          <Button className="group">
            Explore our portfolio{" "}
            <ChevronRight className="group-hover:translate-x-0.5 transition" />
          </Button>
        </div>
      </section>
      <section className="py-16">
        <h2 className="text-4xl font-bold mb-6">Highlights</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex rounded-[2rem] bg-yellow-500/5 text-yellow-500 flex-col p-6 gap-32 font-bold">
            <div className="flex gap-2 bg-gray-900 w-fit px-4 py-2 rounded-full">
              <Rocket />
              <h3>Optimized Web Applications</h3>
            </div>
            <p className="text-4xl">
              We build fast, scalable web apps for seamless user experiences.
            </p>
          </div>

          <div className="flex rounded-[2rem] bg-purple-500/5 text-purple-500 flex-col p-6 gap-32 font-bold">
            <div className="flex gap-2 bg-gray-900 w-fit px-4 py-2 rounded-full">
              <User2 />
              <h3>User-Centered Design</h3>
            </div>
            <p className="text-4xl">
              We focus on intuitive solutions that connect people and
              technology.
            </p>
          </div>
          <div className="flex rounded-[2rem] bg-pink-500/5 text-pink-500 flex-col p-6 gap-32 font-bold">
            <div className="flex gap-2 bg-gray-900 w-fit px-4 py-2 rounded-full">
              <PenTool />
              <h3> Design-Driven Innovation</h3>
            </div>
            <p className="text-4xl">
              Creative design meets technology to deliver real results.
            </p>
          </div>
          <div className="flex rounded-[2rem] bg-lime-500/5 text-lime-500 flex-col p-6 gap-32 font-bold">
            <div className="flex gap-2 bg-gray-900 w-fit px-4 py-2 rounded-full">
              <Braces />
              <h3>Expertise in Decentralized Applications</h3>
            </div>
            <p className="text-4xl">
              We deliver secure, decentralized solutions for the future of
              technology.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 flex gap-32">
        <div className="w-full flex flex-col justify-between">
          <h2 className="text-4xl font-bold mb-6">About us</h2>
          <p>
            ECXOLAB is a software house dedicated to building scalable digital
            solutions, with a strong focus on user experience and design. We
            deliver optimized web applications and decentralized solutions that
            meet business needs and adapt to future growth. At ECXOLAB, design
            and technology seamlessly merge to create impactful results.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 gap-4">
          <div className="bg-gray-950/25 rounded-[2rem] px-6 py-8">
            <h3 className="text-gray-600 font-black mb-8">
              Continuos Projects
            </h3>
            <span className="font-bold text-5xl">10+</span>
          </div>
          <div className="bg-gray-950/25 rounded-[2rem] px-6 py-8">
            <h3 className="text-gray-600 font-black mb-8">
              Client Satisfaction
            </h3>
            <span className="font-bold text-5xl">95%</span>
          </div>
          <div className="bg-gray-950/25 rounded-[2rem] px-6 py-8">
            <h3 className="text-gray-600 font-black mb-8">
              Industry Expertise
            </h3>
            <span className="font-bold text-5xl">+3 yrs</span>
          </div>
          <div className="bg-green-950/25 rounded-[2rem] px-6 py-8">
            <h3 className="text-green-600 font-black mb-8">Annual Growth</h3>
            <span className="font-bold text-green-600 text-5xl">230%</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-4xl font-bold mb-6">Connect with us</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex rounded-[2rem] bg-red-500/5 text-red-500 flex-col p-6 gap-32 font-bold">
            <div className="flex gap-2 bg-gray-900 w-fit px-4 py-2 rounded-full">
              <Bookmark />
              <h3>Blog</h3>
            </div>
            <p className="text-2xl">
              Insights and trends to keep you ahead in the tech world.
            </p>
          </div>

          <div className="flex rounded-[2rem] bg-sky-500/5 text-sky-500 flex-col justify-between p-6 gap-32 font-bold col-span-2">
            <div className="flex gap-2 bg-gray-900 w-fit px-4 py-2 rounded-full">
              <Share2 />
              <h3>Stay connected</h3>
            </div>
            <p className="text-2xl">Follow @ECXOLAB on social medias</p>
          </div>
        </div>
      </section>
    </main>
  );
}
