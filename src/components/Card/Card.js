import React from "react";
import "./Card.css";

const Card = ({
  id,
  title,
  poster_path,
  release_date,
  average_rating,
  showMovieDetails,
}) => {
  return (
    <article
      onClick={(event) => showMovieDetails(event.currentTarget.id)}
      className="movie-card click"
      key={id}
      id={id}
    >
      <img className="movie-image" src={poster_path}></img>
      <h2>{title}</h2>
      <p>Avg. Rating: {Math.round(average_rating)} / 10</p>
      <p>Released: {release_date}</p>
    </article>
  );
};

export default Card;
