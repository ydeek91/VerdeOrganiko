import React from "react";
import "semantic-ui-css/semantic.min.css";
import './Hero.css'
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <>
      <div class="ui inverted vertical masthead center aligned segment">
        <div class="ui text container">
          <Link to='/buy' class="ui huge primary button">
            Welcome <i class="right arrow icon"></i>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Hero;
