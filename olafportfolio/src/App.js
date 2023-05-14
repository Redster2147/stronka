import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element=<Home /> />
          <Route path="/experience" element=<Experience /> />
          <Route path="/portfolio" element=<Portfolio /> />
          <Route path="/contact" element=<Contact /> />
          <Route path="/about" element=<About /> />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
