import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Experience from "./Experience.jsx";
import Footer from "./Footer.jsx";

const Main = () => {
  return (
    <main className="py-16 px-4">
      <About />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
};

export default Main;
