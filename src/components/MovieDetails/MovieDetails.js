import React from "react";
import "./MovieDetails.css";
import Description from "../Description/Description.js";

const MovieDetails = (props) => {
  return (
    <section>
      <Image title={props.title} image={props.backdrop_path} />
      <Description
        overview={props.overview}
        releaseDate={props.release_date}
        averageRating={props.average_rating}
        genre={props.genres}
        budget={props.budget}
        revenue={props.revenue}
        runtime={props.runtime}
        tagline={props.tagline}
      />
    </section>
  );
};
