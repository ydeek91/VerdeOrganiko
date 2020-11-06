import React from "react";
import "semantic-ui-css/semantic.min.css";

const Navbar = () => (
  <>
    <div class="ui large top fixed hidden menu">
      <div className="ui container">
        <div className="ui three buttons">
          <button className="ui active button">Home</button>
          <button className="ui button">About</button>
          <button className="ui button">Buy</button>
        </div>
        <div className="right menu">
          <div className="item">
            <a className="ui button">Log in</a>
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
