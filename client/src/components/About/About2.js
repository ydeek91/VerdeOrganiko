import React from "react";
import "semantic-ui-css/semantic.min.css";

const About = () => (
  <>
    <div class="ui segment">
      <div class="ui two column very relaxed grid">
        <div class="column">
          <img
            class="ui medium circular image "
            src="https://preview.free3d.com/img/2017/12/1871865899267393379/i5m5ahlv-900.jpg"
          ></img>
        </div>
        <div class="column">
          <h2 className="ui aligned header"> OUR SPECIALTY</h2>
          <h3 className="ui aligned header">
            Verde Organiko specializes in providing a large selection of named
            individual succulents, hand-picked special collections, and
            affordable assorted trays with no minimum order or wholesale account
            requirements. We also try our best to accommodate special orders, so
            feel free to contact us if a particular succulent, tray, or
            collection you need isn't listed.{" "}
          </h3>
        </div>
      </div>
    </div>
  </>
);
export default About;
