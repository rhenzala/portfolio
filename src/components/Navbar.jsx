import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="w-full sticky top-0 backdrop-blur-md bg-transparent h-16 px-4 flex items-center z-10">
      <ul className=" bg-slate-800/40 backdrop-blur-sm rounded-md font-mono font-semibold w-full flex justify-around">
        {[
          { id: "about", label: "About" },
          { id: "experience", label: "Experience" },
          { id: "projects", label: "Projects" },
        ].map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`group flex items-center py-1 ${
                activeSection === item.id ? "text-slate-200" : "text-slate-500"
              }`}
            >
              <span
                className={`font-mono nav-text text-sm font-bold lowercase tracking-widest transition-all ${
                  activeSection === item.id
                    ? "text-slate-200"
                    : "group-hover:text-slate-200 group-focus-visible:text-slate-200"
                }`}
              >
                {item.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
