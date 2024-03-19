import React from "react";
import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>React-powered web experiences</h4>
      <h1 className="gradient__text">
        The possibilities are <br /> beyond your imagination
      </h1>
      <p>
        Shara Consultancy: Your partner in digital transformation. React-powered
        experiences, captivating design with CSS, and marketing that drives
        results. Let's build your online success.
      </p>
      <h4>Let's Ideate to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
