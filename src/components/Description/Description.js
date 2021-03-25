import React from "react";

const Description = (props) => {
  const {
    overview,
    releaseDate,
    averageRating,
    genre,
    budget,
    revenue,
    runtime,
    tagline,
  } = props;

  return (
    <article>
      <p>{overview}</p>
      <p>{releaseDate}</p>
      <p>{averageRating}</p>
      <p>{genre}</p>
      <p>{budget}</p>
      <p>{revenue}</p>
      <p>{runtime}</p>
      <p>{tagline}</p>
    </article>
  );
};
