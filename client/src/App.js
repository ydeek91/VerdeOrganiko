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
        <div class="elfsight-app-2d5a33c3-a371-44d5-91d0-496ed2d6bc2e"></div>
        <Parallax />

        <Footer />
      </Router>
    </>
  );
}

export default App;
