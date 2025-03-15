const Footer = () => {
  return (
    <footer
      className="scroll-mt-16 lg:scroll-mt-24 px-8 py-10"
      aria-label="Footer"
    >
      <p className="text-sm font-mono text-center">
        Built with{" "}
        <a
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-300 hover:text-cyan-500 focus:text-cyan-500 font-semibold transition duration-200"
        >
          React
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-300 hover:text-cyan-500 focus:text-cyan-500 font-semibold transition duration-200"
        >
          Tailwind
        </a>
        . 
      </p>
    </footer>
  );
};

export default Footer;
