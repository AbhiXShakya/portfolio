const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="pb-8 pt-14">
        <div className="flex flex-col items-center justify-center space-y-3 md:space-y-0 md:justify-between md:flex-row">
          <p className="text-xs md:pb-0 font-lora">
            © {year} <a href="https://abhixshakya.me">AbhiXShakya.me</a> |
            Next.js
          </p>
          <ul
            style={{ fontSize: "0.62rem" }}
            className="flex flex-col items-center space-y-4 font-normal tracking-widest text-left text-gray-800 md:flex-row md:items-center md:space-y-0 md:space-x-4"
          >
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
                href="https://github.com/abhiXShakya"
                target="_blank"
                rel="noreferrer"
              >
                GITHUB
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
