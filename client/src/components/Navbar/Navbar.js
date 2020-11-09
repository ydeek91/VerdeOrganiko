import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <>
    <div class="ui top fixed borderless huge inverted menu">
      <div className="ui container">
        <Link to="/home" className="header item">Home</Link>
        <Link to="/buy" className="item">Products</Link>
        <Link to="/" className="item">About</Link>
        <div className="right item">
          <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
            <input type="hidden" name="cmd" value="_cart" />
            <input type="hidden" name="business" value="nmaksudov@yahoo.com" />
            <input type="hidden" name="display" value="1" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_viewcart_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>

          <Link to="/login" className="ui inverted button">Log in</Link>
          <Link to="/" className="ui inverted button">Sign Up</Link>
        </div>
      </div>
    </div>
  </>
);

export default Navbar;
