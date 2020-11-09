import React from "react";
import "semantic-ui-css/semantic.min.css";

const About = () => (
  <>
    <div class="ui segment">
      <div class="ui two column very relaxed grid">
        <div class="column">
          <img
            class="ui medium circular image "
            src="https://images.unsplash.com/photo-1509222796416-4a1fef025e92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=896&q=80"
          ></img>
        </div>
        <div class="column">
          <br />
          <h2 className="ui aligned header"> Good for decoration</h2>
          <h3 className="ui aligned">
            Succulents also make a relaxing addition to any home office. We
            thank you for visiting Verde Organiko and invite you to browse our
            succulents for sale in our ONLINE STORE »{" "}
          </h3>
        </div>
      </div>
    </div>
  </>
);
export default About;
