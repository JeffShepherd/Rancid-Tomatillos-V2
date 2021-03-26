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
      selectedMovie: '',
    };
  }

  showMovieDetails = () => {
    this.setState({ selectedMovie: selectedMovieDetails.movie });
  }

  render() {
    return (
      <main>
        <Header />
        {this.state.selectedMovie && <MovieDetails selectedMovie={this.state.selectedMovie} />}
        {!this.state.selectedMovie && <Movies showMovieDetails={this.showMovieDetails} movies={this.state.movies} /> }
      </main>
    );
  }
}

export default App;
