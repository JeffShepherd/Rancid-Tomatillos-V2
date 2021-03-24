import React from "react";

const Movies = ({ movies }) => {
  const movieList = movies.map((movie) => {
    <Card
      id={movie.id}
      title={movie.title}
      poster_path={movie.poster_path}
      backdrop_path={movie.backdrop_path}
      release_date={movie.release_date}
      overview={movie.overview}
      average_rating={movie.average_rating}
    />;
  });

  return <section>{movieList}</section>;
};
