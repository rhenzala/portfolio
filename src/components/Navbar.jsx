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
    <nav className="nav hidden lg:block">
      <ul className="font-mono font-semibold mt-16 w-max">
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
                className={`nav-indicator mr-4 h-2 w-2 transition-all motion-reduce:transition-none ${
                  activeSection === item.id
                    ? " bg-slate-200"
                    : "bg-slate-600 group-hover:bg-slate-200  group-focus-visible:bg-slate-200"
                }`}
              ></span>
              <span
                className={`font-mono nav-text text-sm font-bold uppercase tracking-widest transition-all ${
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
