import React from "react";
import "semantic-ui-css/semantic.min.css";
import About from "../About/About";

const Parallax = () => (
  <>
    <section className="img-1 ">
      <h1>Welcome</h1>
    </section>

    <section>
      <div className="ui jumbotron">
        <About />
      </div>
    </section>

    <section className="img-2">
      <h1>Succulent Plants</h1>
    </section>

    <section className="static">
      <div className="content">
        <h3>Explore New Destinations</h3>
        <p>
          Go to exotic places, go to less touristy places, take a guided
          tour(after all locals know best)!
        </p>
      </div>
    </section>

    <section className="img-3">
      <h1>Rain Forest Plants</h1>
    </section>

    <section className="static">
      <div className="content">
        <h3>Take an Adventurous Risk</h3>
        <p>
          Do something you wouldn't normally do, make new friends, get out of
          your comfort zone.
        </p>
      </div>
    </section>

    <section className="img-4">
      <h1>Nature Beauty's</h1>
    </section>

    <section className="static">
      <div className="content">
        <h3>Indulge and Treat Yourself</h3>
        <p>
          Whether it's food or a massage, you're on a trip, so make the best out
          of it.
        </p>
      </div>
    </section>
  </>
);

export default Parallax;
