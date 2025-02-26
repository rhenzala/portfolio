const Contact = () => {
  return (
    <section
      id="contact"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Contact me"
    >
      <h2 className="text-xl text-slate-200 tracking-tight font-semibold mb-8 uppercase">
        Get In Touch
      </h2>
      <p className="mt-2 leading-normal mb-10">
        Hey! Got a cool project in mind, a job opportunity, or just wanna chat
        about tech? Feel free to hit me up!
      </p>
      <div className="flex justify-center">
        <a
          href="mailto:rhenzala@gmail.com"
          className="px-4 py-2 border-cyan-500 border-solid border rounded-md cursor-pointer text-cyan-500 font-mono hover:shadow-[4px_4px_1px_cyan] transition duration-300 ease-in"
        >
          Message Me
        </a>
      </div>
    </section>
  );
};

export default Contact;
