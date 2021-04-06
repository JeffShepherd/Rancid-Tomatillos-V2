import React from "react";
import "./Card.css";
import { Link } from 'react-router-dom';

const Card = ({ id, title, poster_path, average_rating, clearOutMessage}) => {
  return (
    <Link to={`/${id}`}
        className="movie-card click"
        key={id}
        id={id}
        onClick={() => clearOutMessage()}
      >
        <img className="movie-image" src={poster_path} alt={`${title} movie poster`} />
        <h2 className="card-text">{title}</h2>
        <p className="card-text">Freshness: {Math.round((average_rating / 10) * 100)}%</p>
    </Link>
  );
};

export default Card;
