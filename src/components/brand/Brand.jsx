import React from "react";
import { shopify, react, firebase, figma, adobe } from "./imports";
import "./brand.css";

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={react} />
    </div>
    <div>
      <img src={firebase} />
    </div>
    <div>
      <img src={figma} />
    </div>
    <div>
      <img src={adobe} />
    </div>
    <div>
      <img src={shopify} />
    </div>
  </div>
);

export default Brand;
