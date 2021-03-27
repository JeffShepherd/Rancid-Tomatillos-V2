import React from "react";
import "./Image.css";

const Image = ({ image }) => {
  return (
    <article className="image-container">
      <img className="backdrop-image" src={image} alt="movie poster" />
    </article>
  );
};

export default Image;
