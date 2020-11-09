import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <>
    <div class="ui top fixed borderless huge inverted menu">
      <div className="ui container">
          <div>
            <img
              src="https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/s150x150/122179190_345214929885766_801430817557002940_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=FTf0DiH2-JsAX_TPAzI&oh=4bab276899bf730971f5fae98193f0d8&oe=5FCF7FD7" width="50px" height="50px"
            />
            <span>Verde_Organiko</span>
          </div>
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
    {/* import { Container, Image, Menu, Button } from "semantic-ui-react";

const Navbar = () => (
  <>
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          <div>
            <Image
              src="https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/s150x150/122179190_345214929885766_801430817557002940_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=FTf0DiH2-JsAX_TPAzI&oh=4bab276899bf730971f5fae98193f0d8&oe=5FCF7FD7"
              avatar
            />
            <span>Verde_Organiko</span>
          </div>
        </Menu.Item>
        <Link
        to="/home"
          basic
          inverted
          color="green"
          data-inverted="center"
          data-tooltip="Return Home"
          data-position="bottom center"
        >
          Home
        </Link>
      </Container>
      <Button
        basic
        inverted
        color="green"
        data-inverted="center"
        data-tooltip="Login Into Your Account"
        data-position="bottom center"
      >
        Login
      </Button>
      <Button
        basic
        inverted
        color="blue"
        data-inverted="center"
        data-tooltip="Create New Account"
        data-position="bottom center"
      >
        Sign up
      </Button>
      <Link to="/buy"
        basic
        inverted
        color="red"
        data-inverted="center"
        data-tooltip="Buy A Plant"
        data-position="bottom center"
      >
        <i class="shop icon"></i> Buy
      </Link>
    </Menu> */}
  </>
);

export default Navbar;
