import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Container, Image, Menu, Button } from "semantic-ui-react";

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
        <Button
          basic
          inverted
          color="green"
          data-inverted="center"
          data-tooltip="Return Home"
          data-position="bottom center"
        >
          Home
        </Button>
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
      <Button
        basic
        inverted
        color="red"
        data-inverted="center"
        data-tooltip="Buy A Plant"
        data-position="bottom center"
      >
        <i class="shop icon"></i> Buy
      </Button>
    </Menu>
  </>
);

export default Navbar;
