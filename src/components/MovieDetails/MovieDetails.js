import React from "react";
import "./MovieDetails.css";
import Description from "../Description/Description.js";
import Image from "../Image/Image.js";

const MovieDetails = ({ selectedMovie }) => {
  return (
    <section className="details-view">
      <Image title={selectedMovie.title} image={selectedMovie.backdrop_path} />
      <Description
        tagline={selectedMovie.tagline}
        averageRating={selectedMovie.average_rating}
        overview={selectedMovie.overview}
        genre={selectedMovie.genres}
        releaseDate={selectedMovie.release_date}
        runtime={selectedMovie.runtime}
        budget={selectedMovie.budget}
        revenue={selectedMovie.revenue}
      />
    </section>
  );
};

export default MovieDetails;