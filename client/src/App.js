import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <>
      <Router>
        <Navbar />

      </Router>
    </>
  );
}

export default App;
