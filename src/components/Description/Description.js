import React from "react";
import "./Description.css";

const Description = (selectedMovie) => {
  const { title, overview, releaseDate, averageRating, genre, budget, revenue, runtime, tagline } = selectedMovie;

  return (
    <article className="description">
      <div className="movie-header">
        <h2 className="movie-title">{title}</h2>
        <aside><em>{tagline}</em></aside>
      </div>
      <p><span className="label">Freshness:</span> {Math.round((averageRating / 10) * 100)}%</p>
      <div className="">
        <p className="label">Overview:</p>
        <p>{overview}</p>
      </div>
      <p><span className="label">Genre(s):</span> {genre}</p>
      <p><span className="label">Released:</span> {releaseDate}</p>
      <p><span className="label">Runtime:</span>  {runtime} mins.</p>
      <p><span className="label">Budget:</span>  ${(budget / 1000000).toFixed(2)} m.</p>
      <p><span className="label">Revenue:</span>  ${(revenue / 1000000).toFixed(2)} m.</p>
    </article>
  );
};

export default Description;
