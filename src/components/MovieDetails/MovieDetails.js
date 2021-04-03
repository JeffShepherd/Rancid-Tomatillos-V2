import React, { Component } from "react";
import "./MovieDetails.css";
import Description from "../Description/Description.js";
import Image from "../Image/Image.js";
import { scrubDetailsData } from "../utilities.js";


class MovieDetails extends Component {
  constructor() {
    super()

    this.state = {
      selectedMovie: '',
      error: ''
    }
  }

componentDidMount() {
  fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}`)
    .then((response) => {
      if (!response.ok) {
        this.setState({
          error: "Details for this movie are not available at this time. Please check back later."
        });
      } else {
        return response.json();
      }
    })
    .then((selectedMovie) =>
      this.setState({ selectedMovie: scrubDetailsData(selectedMovie.movie), error: "" })
    )
    .catch((err) => this.setState({
      error: "Details for this movie are not available at this time. Please check back later."
    }));
}


  render() {
    return (
      <>
      {this.state.error && <h2 className="error-message">⚠️ {this.state.error}</h2>}
      {this.state.selectedMovie && 
        <section className="details-view">
          <Image image={this.state.selectedMovie.backdrop_path} />
          <div className="overlay"></div>
          <Description
            title={this.state.selectedMovie.title} 
            tagline={this.state.selectedMovie.tagline}
            averageRating={this.state.selectedMovie.average_rating}
            overview={this.state.selectedMovie.overview}
            genre={this.state.selectedMovie.genres}
            releaseDate={this.state.selectedMovie.release_date}
            runtime={this.state.selectedMovie.runtime}
            budget={this.state.selectedMovie.budget}
            revenue={this.state.selectedMovie.revenue}
          />
        </section>
      }
    </>
    )

  };
}


export default MovieDetails;