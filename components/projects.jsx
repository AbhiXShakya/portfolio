import Image from "next/image";
import { GitHubIcon, LinkIcon } from "./icons";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Amazon Price Tracker",
      description:
        "This Bot will notify you when the price of an Amazon product Changes. Also it will notify you when your product is back in stock. I made it using Python. Github and Telegram Links are given Below.",
      link: "https://telegram.me/PriceZonerBot",
      github: "https://github.com/AbhiXShakya/Amazon-Price-Tracker-PriceZoner",
      image: "/images/Amazon-Price-tracker-by-AbhiXShakya.jpg",
      alt: "Amazon Price Tracker by AbhiXShakya",
      tags: ["Python", "Telegram Bot"],
    },
    {
      id: 2,
      name: "AntrixMesh",
      description:
        "At AntrixMesh, we are building a virtual assets news and research facilitation platform. Our objective is to provide the global community access to all news, data and research under one comprehensive platform.",
      link: "https://antrixmesh.netlify.app/",
      github: "https://github.com/AbhiXShakya/AntrixMesh",
      image: "/images/AntrixMesh-by-AbhiXShakya.jpg",
      alt: "AntrixMesh by AbhiXShakya",
      tags: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
    },
    {
      id: 3,
      name: "Learn2Finance",
      description:
        "We here at Learn2Finance.com talk about money, how to make it, save it and invest it. Our aim is to educate people about money, personal finance and make them aware of the financial freedom that comes with money.",
      link: "https://learn2finance.com/",
      github: false,
      image: "/images/Learn2Finance-by-AbhiXShakya.jpg",
      alt: "Learn2Finance by AbhiXShakya",
      tags: ["Wordpress", "PHP", "CSS"],
    },
  ];

  return (
    <section className="mt-10">
      <div className="md:max-w-[60%] md:pr-24 relative">
        <h1 className="font-bold text-7xl md:text-[14vw]">
          Projects<span className="text-xorange">.</span>
        </h1>
        <div className="headstyle">Projects.</div>
      </div>

      <div className="mt-8 -mx-4 md:mt-16">
        <div className="grid grid-flow-row grid-cols-1 mb-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="mx-6 mt-16">
              <div>
                <Image
                  src={project.image}
                  alt={project.alt}
                  className="object-cover object-center w-full rounded-lg shadow-md"
                  width={1600}
                  height={1400}
                />
                <div className="relative px-4 -mt-16">
                  <div className="p-5 bg-white rounded-lg shadow-lg">
                    <h2 className="text-2xl font-extrabold font-ubuntu">
                      {project.name}
                    </h2>
                    <div className="mt-1">
                      <p className="text-sm text-gray-600 min-h-[9rem]">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-baseline mb-3">
                      {project.tags.map((tag) => (
                        <span
                          key={project.tags.indexOf(tag)}
                          className="inline-block px-2 py-1 mr-1 text-[0.6rem] font-semibold tracking-wide text-black rounded-full bg-xorange"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div className="mr-1 cursor-pointer ">
                            <GitHubIcon width="25" height="25" />
                          </div>
                        </a>
                      )}
                      <a href={project.link} target="_blank" rel="noreferrer">
                        <div className="ml-1 mb-[1rem] pt-[0.3rem] cursor-pointer">
                          <LinkIcon width="16" height="16" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
