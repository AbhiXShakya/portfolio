import Image from "next/image";
import Link from "next/link";

import {
  DockerIcon,
  ExpressJSIcon,
  GitHubIcon,
  JSIcon,
  MongoDBIcon,
  NextJSIcon,
  NginxIcon,
  NodeJSIcon,
  PythonIcon,
  ReactJSIcon,
  SolidityIcon,
  TailwindIcon,
  TSIcon,
} from "./icons";

const About = () => {
  return (
    <section className="my-8">
      <h1 id="about" className="py-8 text-4xl font-bold">
        About
        <span className="headb">Me</span>
      </h1>
      <h2 className="pb-4 text-xl font-semibold">I&apos;m Abhishek Shakya</h2>
      <div className="mt-2 mb-6 md:hidden">
        <Image
          src="/images/AbhiXShakya-Abhishek-Shakya.jpg"
          alt="Abhishek Shakya"
          width={404}
          height={460}
        />
      </div>
      <p>
        I&apos;m a MERN Stack (Next.js) Web Developer. Currently learning
        Blockchain Development. I&apos;m a 3rd Year Student pursuing for B.E.
        (Bachelor of Engineering)
      </p>
      <p>
        I focus on an accessible and simplified style of writing code, and can
        adapt to whichever framework is required. I always try to automate my
        tasks using JS & Python by Developing Bots.
      </p>

      <h1 className="py-8 text-4xl font-bold">
        Tools&nbsp;
        <span className="block md:inline">
          &<span className="headb">Technologies</span>
        </span>
      </h1>
      <div className="grid grid-flow-row grid-cols-3 md:grid-cols-5 lg:grid-cols-9 mx-[-1rem]">
        <div className="m-4 min-w-[5rem]">
          <JSIcon width="50" height="50" />
          <h3 className="mt-2 font-bold">JavaScript</h3>
        </div>
        <div className="m-4 min-w-[5rem]">
          <ReactJSIcon width="50" height="50" />
          <h3 className="mt-2 font-bold">ReactJS</h3>
        </div>
        <div className="m-4 min-w-[5rem]">
          <NextJSIcon width="50" height="50" />
          <h3 className="mt-2 font-bold">NextJS</h3>
        </div>
        <div className="m-4 min-w-[5rem]">
          <ExpressJSIcon width="50" height="50" />
          <h3 className="mt-2 font-bold">ExpressjS</h3>
        </div>
        <div className="m-4 min-w-[5rem]">
          <NodeJSIcon width="50" height="50" />
          <h3 className="mt-2 font-bold">NodeJS</h3>
        </div>
        <div className="m-4 min-w-[5rem]">
          <MongoDBIcon width="50" height="50" />
          <h3 className="mt-2 font-bold">MongoDB</h3>
        </div>
        <div className="m-4 min-w-[5rem]">
          <PythonIcon width="50" height="50" />
          <h3 className="mt-2 font-bold">Python</h3>
        </div>
        <div className="m-4 min-w-[5rem]">
          <SolidityIcon width="50" height="50" />
          <h3 className="mt-2 font-bold">Solidity</h3>
        </div>
        <div className="m-4 min-w-[5rem]">
          <GitHubIcon width="50" height="50" />
          <h3 className="mt-2 font-bold">GitHub</h3>
        </div>
        <div className="m-4 min-w-[5rem]">
          <TailwindIcon width="50" height="50" />
          <h3 className="mt-2 font-bold">TailwindCSS</h3>
        </div>
        <div className="m-4 min-w-[5rem]">
          <DockerIcon width="50" height="50" />
          <h3 className="mt-2 font-bold">Docker</h3>
        </div>
        <div className="m-4 min-w-[5rem]">
          <NginxIcon width="50" height="50" />
          <h3 className="mt-2 font-bold">NGiNX</h3>
        </div>
      </div>
      <p className="mt-8">
        I believe Project Based Learning is the best approach to learn anything.
        Hence, I&apos;ve got projects in different technologies that I&apos;ve
        learnt over time. I&apos;d love you to check out my projects.
      </p>
      <Link href="/projects">
        <button className="px-6 py-1 mt-4 text-2xl font-extrabold border-4 border-xorange">
          Go to Projects
        </button>
      </Link>
    </section>
  );
};

export default About;
