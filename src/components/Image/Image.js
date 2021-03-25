import React from "react";
import "./Image.css";

const Image = ({ title, image }) => {
  return (
    <article className="image-container">
      <h2 className="movie-title">{title}</h2>
      <img className="backdrop-image" src={image} />
    </article>
  );
};

export default Image;
