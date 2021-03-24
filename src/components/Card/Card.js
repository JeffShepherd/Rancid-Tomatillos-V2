import React from "react";

const Card = ({ id, title, poster_path, release_date, average_rating }) => {
  return (
    <article key={id}>
      <img src={poster_path}></img>
      <h2>{title}</h2>
      <p>{average_rating}</p>
      <p>{release_date}</p>
    </article>
  );
};

export default Card;
