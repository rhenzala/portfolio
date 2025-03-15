import Socials from "./Socials.jsx";
import { MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className=" py-16 px-4 flex flex-col justify-between">
      <div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-slate-200">
          Rhenzal Abdulsali
        </h1>
        <h2 className="text-slate-300 text-xl font-semibold mt-3 tracking-tight">
          Full Stack Developer
        </h2>
        <p className="mt-4 leading-normal">
          A software developer with keen interest in buiding website. I mostly use JavaScript and Python.
        </p>
        <p className="mt-4 flex items-center gap-2">
          <MapPin size={16}/>
          <span>Quezon City, Philippines</span>
        </p>
      </div>
      <Socials />
    </header>
  );
};

export default Header;
