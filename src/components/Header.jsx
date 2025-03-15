import Socials from "./Socials.jsx";
import Navbar from "./Navbar.jsx";
import { MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="lg:w-[48%] lg:py-24 lg:sticky lg:flex lg:top-0 lg:max-h-screen lg:flex-col lg:justify-between">
      <div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-slate-200">
          Rhenzal Abdulsali
        </h1>
        <h2 className="text-slate-300 text-xl font-semibold mt-3 tracking-tight">
          Full Stack Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          A full stack developer with keen interest in backend. I mostly use JavaScript and Python.
        </p>
        <p className="mt-4 flex items-center gap-2">
          <MapPin size={16}/>
          <span>Quezon City, Philippines</span>
        </p>
      </div>
      <Navbar />
      <Socials />
    </header>
  );
};

export default Header;
