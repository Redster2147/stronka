import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <div id="Home">
        <Home />
      </div>
      <div id="About">
        <About />
      </div>
      <div id="Experience">
        <Experience />
      </div>
      <div id="Portfolio">
        <Portfolio />
      </div>
      <div id="Contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
