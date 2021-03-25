import React from "react";
import "./Image.css";

const Image = ({ title, image }) => {
  return (
    <article>
      <h2>{title}</h2>
      <img src={image} />
    </article>
  );
};

export default Image;
