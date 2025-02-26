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
        Hey there! I'm Rhenzal Abdulsali, a passionate programmer with a
        background in Electronics Engineering. I hold a Bachelor of Science in
        Electronics Engineering (BS ECE) from{" "}
        <a
          href="https://plm.edu.ph/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-200 hover:text-cyan-500 focus:text-cyan-500 font-medium transition duration-200"
        >
          Pamantasan ng Lungsod ng Maynila
        </a>
        , where I specialized in Telecommunications & Networking. My interest in
        development started in high school where I was introduced to web
        development and Java, and since then, I have been programming on and
        off. Also, I have programming coursework in college where I learned
        Java, Arduino, and Assembly.
      </p>

      <p className="mb-4">
        Beside programmig, I am also interested in Network Engineering. I have
        hands-on experience with Networking from my internship as a Network
        Engineer Intern at{" "}
        <a
          href="https://dfp.com.ph/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-200 hover:text-cyan-500 focus:text-cyan-500 font-medium transition duration-200"
        >
          Duty Free Philippines Corporation
        </a>
        , where I acquired experience with network switches, routers, access
        points, telephony, and cabling.
      </p>

      <p className="mb-4">
        I am continuously expanding my knowledge in networking through{" "}
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
        </a>
        , where I have gained hands-on experience with <strong>S3</strong>,{" "}
        <strong>EC2</strong>, and <strong>VPC</strong> through the{" "}
        <strong>Cloud Quest</strong> game. Additionally, I am enhancing my
        Python skills, building upon the foundation I established during my
        college capstone project, where we extensively utilized Python to
        develop our solution.
      </p>
    </section>
  );
};

export default About;
