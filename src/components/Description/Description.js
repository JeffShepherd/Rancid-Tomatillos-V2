import React from "react";
import "./Description.css";
import { roundOutAvg, formatDollarAmount } from '../utilities.js'

const Description = (selectedMovie) => {
  const { 
    title, 
    overview, 
    releaseDate, 
    averageRating, 
    genre, 
    budget, 
    revenue, 
    runtime, 
    tagline 
  } = selectedMovie;

  return (
    <article className="description">
      <div className="movie-header">
        <h2 className="movie-title">{title}</h2>
        <aside><em>{tagline}</em></aside>
      </div>
      <p><span className="label">Freshness:</span> {roundOutAvg(averageRating)}%</p>
      <div className="">
        <p className="label">Overview:</p>
        <p>{overview}</p>
      </div>
      <p><span className="label">Genre(s):</span> {genre.join('-')}</p>
      <p><span className="label">Released:</span> {releaseDate}</p>
      <p><span className="label">Runtime:</span>  {runtime} mins.</p>
      {budget > 0 &&
        <p><span className="label">Budget:</span>  ${formatDollarAmount(budget)} m.</p>
      }
      {revenue > 0 &&
        <p><span className="label">Revenue:</span>  ${formatDollarAmount(revenue)} m.</p>
      }
    </article>
  );
};

export default Description;
