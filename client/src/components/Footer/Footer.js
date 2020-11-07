import React from "react";
import { Button } from "semantic-ui-react";

const Footer = () => (
  <div className="ui inverted black vertical footer segment">
    <div className="ui center aligned container">
      <h3 className="ui inverted header">
        &copy; Copyright 2020 | All rights reserved | Verde_Organiko
        <br />
        <br /> Follow us on Instagram
      </h3>

      <Button
        className="ui instagram button"
        basic
        ui
        inverted
        color="purple"
        data-inverted="center"
        data-tooltip="Follow Us"
        data-position="top center"
      >
        <i className="instagram icon"></i>
        Instagram
      </Button>
    </div>
  </div>
);

export default Footer;
