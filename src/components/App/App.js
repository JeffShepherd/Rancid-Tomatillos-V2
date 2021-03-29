import React, { Component } from "react";
import Header from "../Header/Header.js";
import Movies from "../Movies/Movies.js";
import MovieDetails from "../MovieDetails/MovieDetails.js";
import "./App.css";


class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      selectedMovie: "",
      error: ""
    };
  }

  componentDidMount() {
    fetch("http://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((response) => response.json())
      .then((movies) => this.setState({ movies: movies.movies, error: "" }))
      .catch((error) =>
        this.setState({ error: "We're sorry, an error has occurred. Please try again later."})
      );
  }

  showMovieDetails = (movieID) => {
    fetch(`http://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`)
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
        this.setState({ selectedMovie: selectedMovie.movie, error: "" })
      )
      .catch((error) => console.log(error.message));
  };

  returnToHomePage = () => {
    this.setState({ selectedMovie: "", error: "" });
  };

  render() {
    return (
      <main>
        <Header returnToHomePage={this.returnToHomePage} />
        {this.state.error && <h2 className="error-message">⚠️ {this.state.error}</h2>}
        {this.state.selectedMovie && (<MovieDetails selectedMovie={this.state.selectedMovie} />)}
        {!this.state.selectedMovie && (<Movies showMovieDetails={this.showMovieDetails} movies={this.state.movies} />)}
      </main>
    );
  }
}

export default App;
