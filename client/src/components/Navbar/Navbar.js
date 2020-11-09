import React from "react";
import "semantic-ui-css/semantic.min.css";

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
