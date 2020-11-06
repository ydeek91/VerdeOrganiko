import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import LoginForm from "./components/LoginForm/LoginForm";
import Product from "./Pages/Product";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Hero /> */}
        {/* <h2 class="ui center aligned icon header">
          <i class="circular users icon"></i>
          About us
        </h2> */}
        <Route path='/buy' exact component={Product} />
        <Route path='/home' exact component={Home} />
        <Route path='/login' exact component={Login} />
        {/* <LoginForm /> */}
      </Router>
    </>
  );
}

export default App;
