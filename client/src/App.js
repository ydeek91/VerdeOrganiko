import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Parallax from "./components/Parallax/Parallax";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Parallax />

        <Footer />
      </Router>
    </>
  );
}

export default App;
