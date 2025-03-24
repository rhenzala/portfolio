import { useState, useRef, useEffect } from "react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className={`mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      aria-label="Experience and Education"
    >
      <h2 className={`text-xl font-mono text-slate-200 tracking-tight font-medium mb-8 transition-all duration-500 delay-100 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}>
        where I've worked & studied
      </h2>
      <div className={`rounded-lg transition-all duration-500 delay-200 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}>
        <div className="flex justify-between space-x-4 bg-slate-800 rounded-md mb-8 p-1">
          <button
            onClick={() => setActiveTab("experience")}
            className={`py-2 px-4 text-sm font-medium rounded-md w-1/2 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 ${
              activeTab === "experience"
                ? "bg-slate-200 text-slate-950"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`py-2 px-4 text-sm font-medium rounded-md w-1/2 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 ${
              activeTab === "education"
                ? "bg-slate-200 text-slate-950"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Education
          </button>
        </div>
        <div className="space-y-4 relative min-h-[200px]">

          <div 
            className={`text-slate-300 absolute w-full transition-all duration-500 ease-in-out ${
              activeTab === "experience" 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 translate-x-8 pointer-events-none"
            }`}
          >
            <div className="transition-all duration-300 delay-100">
              <h3 className="text-lg font-semibold">Network Engineer Intern</h3>
              <p className="text-sm flex flex-col md:flex-row justify-between">
                <a
                  href="https://dfp.com.ph/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-500 focus:text-cyan-500 transition-all duration-200 hover:scale-[1.02] transform-gpu"
                >
                  Duty Free Philippines Corporation
                </a> 
                <span>Jul 2023 - Aug 2023</span>
              </p>
              <ul className="mt-2 list-disc pl-8 text-slate-400">
                <li className="transition-all duration-300 delay-150">
                  Diagnosed and resolved network connectivity issues across 7+ departments, maintaining network uptime.
                </li>
                <li className="transition-all duration-300 delay-200">
                  Coordinated with other IT Team and seniors in diagnosing hardware and network issues providing timely resolutions.
                </li>
                <li className="transition-all duration-300 delay-250">
                  Configured, deployed and maintained network devices such as switches, routers, and access points.
                </li>
              </ul>
            </div>
          </div>

          <div 
            className={`text-slate-300 absolute w-full transition-all duration-500 ease-in-out ${
              activeTab === "education" 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 -translate-x-8 pointer-events-none"
            }`}
          >
            <div className="transition-all duration-300 delay-100">
              <h3 className="text-lg font-semibold">Bachelor of Science in Electronics Engineering</h3>
              <p className="text-sm flex flex-col md:flex-row justify-between">
                <a
                  href="https://plm.edu.ph/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-500 focus:text-cyan-500 transition-all duration-200 hover:scale-[1.02] transform-gpu"
                >
                  Pamantasan ng Lungsod ng Maynila
                </a>
                <span>Aug 2019 - Sep 2024</span>
              </p>
              <ul className="mt-2 list-disc pl-8 text-slate-400">
                <li className="transition-all duration-300 delay-150">
                  Relevant Coursework: Computer Programming, Microprocessor & Microcontroller, Data Communication
                </li>
                <li className="transition-all duration-300 delay-200">
                  Passed the Electronics Engineering Licensure Examination (ECELE) and Electronics Technician Licensure Examination (ETLE) last October 2024.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;