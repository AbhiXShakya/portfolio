import About from "../components/about";
import Contactme from "../components/contactme";
import Footer from "../components/footer";
import HomeContent from "../components/homeContent";
import Navbar from "../components/navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Abhishek Shakya</title>
        <meta
          name="description"
          content="I'm Abhishek Shakya a MERN Stack (Next.js) Web & Blockchain Developer. I'm a Student pursuing for B.E. (Bachelor of Engineering). I always try to automate my tasks using JS & Python by Developing Bots."
        />
        <meta property="og:title" content="Abhishek Shakya" />
        <meta property="og:site_name" content="Abhishek Shakya" />

        <link rel="canonical" href="/" />
        <meta property="og:url" content="/" />

        <meta name="twitter:title" content="Abhishek Shakya" />
        <meta
          name="twitter:description"
          content="I'm Abhishek Shakya a MERN Stack (Next.js) Web & Blockchain Developer. I'm a Student pursuing for B.E. (Bachelor of Engineering). I always try to automate my tasks using JS & Python by Developing Bots."
        />
      </Head>
      <Navbar page="home" />
      <div className="px-4 md:px-12 lg:px-20 font-ubuntu">
        <HomeContent />
        <About />
        <Contactme />
        <Footer />
      </div>
    </>
  );
}
