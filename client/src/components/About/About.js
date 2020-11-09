import React from "react";
import "semantic-ui-css/semantic.min.css";

const About = () => (
  <>
    <div class="ui segment">
      <div class="ui two column very relaxed grid">
        <div class="column">
          <img
            class="ui medium circular image "
            src="https://images.unsplash.com/photo-1508022713622-df2d8fb7b4cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
          ></img>
        </div>
        <div class="column">
          <br />
          <h2 className="ui aligned header"> About Us</h2>
          <h3 className="ui aligned header">Family owned since 2020. </h3>
          <h3 className="ui aligned header">
            We are dedicated to making arrangements of natural silver to
            decorate your home or that little corner of peace. We provide care
            so that you can take care of it and see it develop at its best ✨
            You can also communicate on our Instagram page for any questions or
            recommendations. 🌱Verde_Organiko Thanks for your support❤️{" "}
          </h3>
        </div>
      </div>
    </div>
  </>
);
export default About;
