import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Projects from "../components/projects";
import Head from "next/head";

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects - AbhiXShakya</title>
        <meta
          name="description"
          content="I'm Abhishek Shakya a MERN Stack (Next.js) Web & Blockchain Developer. I've got projects in different technologies that I've learnt over time. I'd love you to check out my projects."
        />
        <meta property="og:title" content="Projects - AbhiXShakya" />
        <meta property="og:site_name" content="Abhishek Shakya" />
        <link rel="canonical" href="/projects" />
        <meta property="og:url" content="/projects" />

        <meta name="twitter:title" content="Projects - AbhiXShakya" />
        <meta
          name="twitter:description"
          content="I'm Abhishek Shakya a MERN Stack (Next.js) Web & Blockchain Developer. I've got projects in different technologies that I've learnt over time. I'd love you to check out my projects."
        />
      </Head>
      <Navbar page="projects" />
      <div className="px-4 md:px-12 lg:px-20 font-ubuntu">
        <Projects />
        <Footer />
      </div>
    </>
  );
};

export default projects;
