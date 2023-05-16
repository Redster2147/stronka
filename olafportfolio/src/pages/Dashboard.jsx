import About from "../pages/About";
import Contact from "../pages/Contact";
import Experience from "../pages/Experience";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import React from "react";
function Dashboard() {
  return (
    <div className="bg-black flex flex-col justify-between h-screen">
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

export default Dashboard;
