import React, { Component } from "react";
import Header from "../Header/Header.js";
import Movies from "../Movies/Movies.js";
import MovieDetails from "../MovieDetails/MovieDetails.js";

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      selectedMovie: "",
    };
  }

  componentDidMount() {
    fetch("http://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((response) => response.json())
      .then((movies) => this.setState({ movies: movies.movies }))
      .catch((error) => this.setState({ error: error.message }));
  }

  showMovieDetails = (movieID) => {
    fetch(`http://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`)
      .then((response) => response.json())
      .then((selectedMovie) =>
        this.setState({ selectedMovie: selectedMovie.movie })
      )
      .catch((error) => this.setState({ error: error.message }));
  };

  returnToHomePage = () => {
    this.setState({ selectedMovie: "" });
  };

  render() {
    return (
      <main>
        <Header returnToHomePage={this.returnToHomePage} />
        {this.state.selectedMovie && (
          <MovieDetails selectedMovie={this.state.selectedMovie} />
        )}
        {!this.state.selectedMovie && (
          <Movies
            showMovieDetails={this.showMovieDetails}
            movies={this.state.movies}
          />
        )}
      </main>
    );
  }
}

export default App;
