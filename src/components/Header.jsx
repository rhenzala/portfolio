import Socials from "./Socials.jsx"

const Header = () => {
    return (
       <header className="lg:w-[48%] lg:py-24 lg:sticky lg:flex lg:top-0 lg:max-h-screen lg:flex-col lg:justify-between">
            <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Rhenzal Abdulsali</h1>
                <h2 className="text-slate-500 text-xl font-semibold mt-3 tracking-tight">Aspiring DevOps Engineer</h2>
                <p className="mt-4 max-w-xs leading-normal">I am a new graduate aiming to be a DevOps.</p>
                
            </div>
            <nav className="nav hidden lg:block">
                <ul className="font-mono font-semibold mt-16 w-max">
                    <li>
                        <a href="#about" className="group flex items-center py-3">
                            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                            <span className="font-mono nav-text text-sm font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span>
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="group flex items-center py-3">
                            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                            <span className="font-mono nav-text text-sm font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects</span>
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="group flex items-center py-3">
                            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                            <span className="font-mono nav-text text-sm font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Contact</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <Socials />
       </header>
    )
}

export default Header