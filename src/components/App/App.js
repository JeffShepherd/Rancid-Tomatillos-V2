import React, { Component } from "react";
import Header from "../Header/Header.js";
import Movies from "../Movies/Movies.js";
import { movieData } from "../../testData.js";

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: movieData.movies,
      selectedMovie: "",
    };
  }

  render() {
    return (
      <main>
        <Header />
        {/* if(this.state.selectedMovie && <MovieDetails />) */}
        <Movies movies={this.state.movies} />
      </main>
    );
  }
}

export default App;
