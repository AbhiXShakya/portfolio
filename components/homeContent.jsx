import Image from "next/image";
import Link from "next/link";

const HomeContent = () => {
  return (
    <main className="mt-24 text-xblack font-ubuntu md:mt-32">
      <section className="flex justify-between">
        <div className="md:max-w-[60%] md:pr-24">
          <h1 className="font-bold text-7xl md:text-[16vw] ml-[-0.07em] mt-[-3rem]">
            Hello<span className="text-xorange">.</span>
          </h1>
          <p className="mt-5 text-sm text-xtextgray font-lora md:text-base md:max-w-[90%]">
            My name is Abhishek Shakya. I’m a{" "}
            <span className="font-semibold border-b-2 border-xorange text-xblack">
              Web & Blockchain Developer
            </span>{" "}
            and here&apos;s my Portfolio. Have a look.
          </p>
        </div>
        <div className="hidden md:flex md:justify-between">
          <Image
            src="/images/AbhiXShakya-Abhishek-Shakya.jpg"
            alt="Abhishek Shakya AbhiXShakya"
            width={404}
            height={460}
            priority={true}
          />

          <Link href="#about">
            <div className="hidden cursor-pointer lg:flex lg:items-end lg:justify-end lg:w-16 lg:pl-32">
              <span className="flex flex-col items-center justify-center text-xs font-normal uppercase text-xblack">
                <span>S</span> <span>c</span> <span>r</span> <span>o</span>
                <span>l</span> <span>l</span>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 28 28"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 20l-4 4m0 0l-4-4m4 4V3"
                  />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomeContent;
