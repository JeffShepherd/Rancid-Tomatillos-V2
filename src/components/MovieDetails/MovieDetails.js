import React, { Component } from "react";
import "./MovieDetails.css";
import Description from "../Description/Description.js";
import Image from "../Image/Image.js";

class MovieDetails extends Component {
  constructor() {
    super()

    this.state = {
      selectedMovie: ''
    }
  }

componentDidMount() {
  console.log(this.props.id)
  fetch(`http://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}`)
    .then((response) => response.json())
    .then((selectedMovie) => 
      this.setState({selectedMovie: selectedMovie.movie}))
}

  render() {
    return (
      <>
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

// import React from "react";
// import "./MovieDetails.css";
// import Description from "../Description/Description.js";
// import Image from "../Image/Image.js";

// const MovieDetails = ({ selectedMovie }) => {
//   return (
//     <section className="details-view">
//       <Image image={selectedMovie.backdrop_path} />
//       <div className="overlay"></div>
//       <Description
//         title={selectedMovie.title} 
//         tagline={selectedMovie.tagline}
//         averageRating={selectedMovie.average_rating}
//         overview={selectedMovie.overview}
//         genre={selectedMovie.genres}
//         releaseDate={selectedMovie.release_date}
//         runtime={selectedMovie.runtime}
//         budget={selectedMovie.budget}
//         revenue={selectedMovie.revenue}
//       />
//     </section>
//   );
// };

// export default MovieDetails;