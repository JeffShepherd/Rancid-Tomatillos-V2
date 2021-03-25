import React, { Component } from "react";
import Header from "../Header/Header.js";
import Movies from "../Movies/Movies.js";
import { movieData, selectedMovieDetails } from "../../testData.js";
import MovieDetails from "../MovieDetails/MovieDetails.js";

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: movieData.movies,
      selectedMovie: selectedMovieDetails.movie,
    };
  }

  render() {
    return (
      <main>
        <Header />
        <MovieDetails selectedMovie={this.state.selectedMovie} />
        {/* if(this.state.selectedMovie && <MovieDetails />) */}
        {/* <Movies movies={this.state.movies} /> */}
      </main>
    );
  }
}

export default App;
