const Header = () => {
    return (
       <header className="h-[70px] border-b-cyan border-b border-b-solid flex justify-between items-center px-12">
            <div>
                <button>
                    <a href="" className="text-cyan font-mono text-xl font-bold">rhenzala</a>
                </button>
            </div>
            <nav>
                <ul className="flex gap-8 text-sm">
                    <li className="hover:text-cyan font-bold text-slate"><a href="">About</a></li>
                    <li className="hover:text-cyan font-bold text-slate"><a href="">Projects</a></li>
                    <li className="hover:text-cyan font-bold text-slate"><a href="">Contact</a></li>
                </ul>
            </nav>
       </header>
    )
}

export default Header