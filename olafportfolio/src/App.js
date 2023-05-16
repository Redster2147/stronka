import "./App.css";
import Header from "./components/Header";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="text-white">
        <Dashboard />
      </div>
    </React.Fragment>
  );
}

export default App;
