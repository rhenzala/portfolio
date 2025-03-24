import "./App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import MouseHaloEffect from "./components/MouseHaloEffect.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl py-4 font-sans md:px-12  lg:px-[20%]">
      <MouseHaloEffect />
      <div>
        <Navbar />
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
