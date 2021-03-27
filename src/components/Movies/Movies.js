import React from "react";
import Card from "../Card/Card.js";
import "./Movies.css";

const Movies = ({ movies, showMovieDetails }) => {
  const movieList = movies.map((movie) => {
    return (
      <Card
        key={movie.id}
        id={movie.id}
        title={movie.title}
        poster_path={movie.poster_path}
        backdrop_path={movie.backdrop_path}
        release_date={movie.release_date}
        overview={movie.overview}
        average_rating={movie.average_rating}
        showMovieDetails={showMovieDetails}
      />
    );
  });

  return <section className="movie-container">{movieList}</section>;
};

export default Movies;
