import {
  MailIcon,
  TelegramIcon,
  LinkedInIcon,
  TwitterIcon,
  GitHubIcon,
} from "./icons";

const Contactme = () => {
  return (
    <>
      <h1 id="contact" className="py-8 text-4xl font-bold">
        Contact&nbsp;<span className="headb">Me</span>
      </h1>
      <div className="grid grid-flow-row grid-cols-3 md:grid-cols-5 lg:grid-cols-9 mx-[-1rem]">
        <a href="mailto:abhixshakya@gmail.com" target="_blank" rel="noreferrer">
          <div className="m-4 min-w-[5rem]">
            <MailIcon width="50" height="50" />
            <h3 className="mt-2 font-bold">&nbsp;Mail</h3>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/abhixshakya"
          target="_blank"
          rel="noreferrer"
        >
          <div className="m-4 min-w-[5rem]">
            <LinkedInIcon width="50" height="50" />
            <h3 className="mt-2 font-bold">LinkedIn</h3>
          </div>
        </a>
        <a
          href="https://telegram.me/abhixshakya"
          target="_blank"
          rel="noreferrer"
        >
          <div className="m-4 min-w-[5rem]">
            <TelegramIcon width="50" height="50" />
            <h3 className="mt-2 font-bold">Telegram</h3>
          </div>
        </a>
        <a
          href="https://twitter.com/itsAbhiXShakya"
          target="_blank"
          rel="noreferrer"
        >
          <div className="m-4 min-w-[5rem]">
            <TwitterIcon width="50" height="50" />
            <h3 className="mt-2 font-bold">Twitter</h3>
          </div>
        </a>
        <a
          href="https://github.com/AbhiXShakya"
          target="_blank"
          rel="noreferrer"
        >
          <div className="m-4 min-w-[5rem]">
            <GitHubIcon width="50" height="50" />
            <h3 className="mt-2 font-bold">GitHub</h3>
          </div>
        </a>
      </div>
    </>
  );
};

export default Contactme;
