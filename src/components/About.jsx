import Skills from "./Skills";

const About = () => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <h2 className="text-xl text-slate-200 tracking-tight font-semibold mb-8 uppercase">
        About Me
      </h2>
      <p className="mb-4">
        I'm a full stack developer working with JavaScript for web development and Python for other projects. I like building things that are simple and functional, both on the frontend and backend. I also have some background in Network Engineering. 
      </p>

      <p className="mb-4">
        Beside programming, I am continuously expanding my knowledge in networking through{" "}
        <a
          href="https://www.netacad.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-200 hover:text-cyan-500 focus:text-cyan-500 font-medium transition duration-200"
        >
          Cisco Networking Academy
        </a>{" "}
        and exploring cloud computing with{" "}
        <a
          href="https://aws.amazon.com/training/digital/aws-cloud-quest/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-200 hover:text-cyan-500 focus:text-cyan-500 font-medium transition duration-200"
        >
          AWS
        </a> through the{" "}
        <strong>Cloud Quest</strong> game, where I have gained hands-on experience with <strong>S3</strong>,{" "}
        <strong>EC2</strong>, and <strong>VPC</strong>.
      </p>
      <Skills />
    </section>
  );
};

export default About;
