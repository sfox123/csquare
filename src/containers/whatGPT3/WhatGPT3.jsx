import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="Who are we?"
        text="We are a team of 6 engineers from all over the world. We are working on different projects and we are open to work with you."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        The end results are beyond your imagination
      </h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Modern Design"
        text="We are using the latest technologies to build your software. We are using React, Node, Express, MongoDB, and many more."
      />
      <Feature
        title="Knowledgebase"
        text="Hand picked engineers from all over the world. We are working on different projects and we are open to work with you."
      />
      <Feature title="Cost Effective" text="Cost effective and time saving." />
    </div>
  </div>
);

export default WhatGPT3;
