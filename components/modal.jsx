import Link from "next/link";

const Modal = ({ setIsOpen, page }) => {
  return (
    <div className="absolute z-10 flex flex-col justify-between w-full h-full px-4 bg-white font-ubuntu md:px-12 lg:px-20">
      <div className="flex justify-between py-5">
        <div className="cursor-pointer">
          <Link href="/" title="Logo">
            <h1 className="text-4xl font-bold text-xblack">
              Abhi<span className="text-4xl font-bold text-xoranged">X</span>
              Shakya
            </h1>
          </Link>
        </div>
        <div
          className="flex items-center space-x-2 cursor-pointer select-none"
          onClick={() => setIsOpen(false)}
        >
          <span className="text-sm font-normal">CLOSE</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <nav className="w-full my-6 text-4xl font-bold text-right md:text-6xl md:pr-20">
        <ul className="flex flex-col space-y-4">
          <li>
            <Link href="/">
              <span
                className={
                  page == "home" ? "headbh headb text-xblack " : "headbh "
                }
              >
                Home
              </span>
            </Link>
          </li>
          <li
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <Link href="/#about">
              <span className="headbh">About</span>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <span
                className={
                  page == "projects" ? "headbh headb text-xblack " : "headbh "
                }
              >
                Projects
              </span>
            </Link>
          </li>
          <li
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <Link href="/#contact">
              <span className="headbh">Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
      <nav
        style={{ fontSize: "0.62rem" }}
        className="w-full my-6 font-normal tracking-widest text-left text-gray-800"
      >
        <ul className="flex flex-col space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4">
          <li>
            <a
              href="https://www.linkedin.com/in/abhixshakya"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/itsAbhiXShakya"
              target="_blank"
              rel="noreferrer"
            >
              TWITTER
            </a>
          </li>
          <li>
            <a
              href="https://telegram.me/abhixshakya"
              target="_blank"
              rel="noreferrer"
            >
              TELEGRAM
            </a>
          </li>
          <li>
            <a
              href="https://github.com/AbhiXShakya"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Modal;
