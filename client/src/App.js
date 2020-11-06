import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Hero />
        <h2 class="ui center aligned icon header">
          <i class="circular users icon"></i>
          About us
        </h2>
      </Router>
    </>
  );
}

export default App;
