import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <div class="ui large top fixed hidden menu">
      <div className="ui container">
        <div className="ui three buttons">
          <Link to="/home" className="ui active button">Home</Link>
          <button className="ui button">About</button>
          <Link to="/buy" className="ui button">Buy</Link>
        </div>
        <div className="right menu">
          <div className="item">
            <Link to="/login" className="ui button">Log in</Link>
          </div>
          <div className="item">
            <a className="ui primary button">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Navbar;
