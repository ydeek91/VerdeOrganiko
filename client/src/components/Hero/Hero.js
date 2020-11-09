import React from "react";
import "semantic-ui-css/semantic.min.css";
import './Hero.css'
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <>
      <div class="ui inverted vertical masthead center aligned segment">
        <div class="ui content container">
          <h1 className="ui inverted header">Verde Organics</h1>
          <Link to='/buy' class="ui huge primary button">
            Explore <i class="right arrow icon"></i>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Hero;
