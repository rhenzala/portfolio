import { useState } from "react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Experience and Education"
    >
      <h2 className="text-xl text-slate-200 tracking-tight font-semibold mb-8 uppercase">
        Experience & Education
      </h2>
      <div className="flex space-x-4 border-b border-slate-600 mb-8">
        <button
          onClick={() => setActiveTab("experience")}
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === "experience"
              ? "border-b-2 border-cyan-500 text-white"
              : "text-slate-400 hover:text-white"
          }`}
        >
          Experience
        </button>
        <button
          onClick={() => setActiveTab("education")}
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === "education"
              ? "border-b-2 border-cyan-500 text-white"
              : "text-slate-400 hover:text-white"
          }`}
        >
          Education
        </button>
      </div>
      <div className="space-y-4">
        {activeTab === "experience" && (
          <div className="text-slate-300">
            <h3 className="text-lg font-semibold">Network Engineer Intern</h3>
            <p className="text-sm flex flex-col md:flex-row justify-between">{" "}
              <a
                href="https://dfp.com.ph/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-500 focus:text-cyan-500 transition duration-200"
              >
                Duty Free Philippines Corporation
              </a> 
              <span>Jul 2023 - Aug 2023</span>
            </p>
            <ul className="mt-2 list-disc pl-8 text-slate-400">
              <li>Diagnosed and resolved network connectivity issues across 7+ departments, maintaining network uptime.</li>
              <li>Coordinated with other IT Team and seniors in diagnosing hardware and network issues providing timely resolutions.</li>
              <li>Configured, deployed and maintained network devices such as switches, routers, and access points.</li>
            </ul>
          </div>
        )}

        {activeTab === "education" && (
          <div className="text-slate-300">
            <h3 className="text-lg font-semibold">Bachelor of Science in Electronics Engineering</h3>
            <p className="text-sm flex flex-col md:flex-row justify-between">{" "}
              <a
                href="https://plm.edu.ph/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-500 focus:text-cyan-500 transition duration-200"
              >
                Pamantasan ng Lungsod ng Maynila
              </a>
              <span>Aug 2019 - Sep 2024</span>
            </p>
            <ul className="mt-2 list-disc pl-8 text-slate-400">
              <li>Relevant Coursework: Computer Programming, Microprocessor & Microcontroller, Data Communication</li>
              <li>Passed the Electronics Engineering Licensure Examination (ECELE) and Electronics Technician Licensure Examination (ETLE) last October 2024.</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
