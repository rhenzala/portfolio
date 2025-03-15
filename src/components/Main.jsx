import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Experience from "./Experience.jsx";
import Footer from "./Footer.jsx";

const Main = () => {
  return (
    <main className="lg:w-[52%] lg:py-24 pt-24">
      <About />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
};

export default Main;
