import Socials from "./Socials.jsx"
import Navbar from "./Navbar.jsx"

const Header = () => {
    return (
       <header className="lg:w-[48%] lg:py-24 lg:sticky lg:flex lg:top-0 lg:max-h-screen lg:flex-col lg:justify-between">
            <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-slate-200">Rhenzal Abdulsali</h1>
                <h2 className="text-slate-300 text-xl font-semibold mt-3 tracking-tight">Aspiring DevOps Engineer</h2>
                <p className="mt-4 max-w-xs leading-normal">I am a new graduate aiming to be a DevOps.</p>
                
            </div>
            <Navbar />
            <Socials />
       </header>
    )
}

export default Header