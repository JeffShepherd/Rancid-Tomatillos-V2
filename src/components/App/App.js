import React, { Component } from "react";
import Header from "../Header/Header.js";
import Movies from "../Movies/Movies.js";
import MovieDetails from "../MovieDetails/MovieDetails.js";
import { Route } from 'react-router-dom'
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

  render() {
    return (
      <main>
        <Header returnToHomePage={this.returnToHomePage} />
        {this.state.error && <h2 className="error-message">⚠️ {this.state.error}</h2>}

        <Route exact path="/" render={() => <Movies showMovieDetails={this.showMovieDetails} movies={this.state.movies} />} />

        <Route exact path='/:movieID' render={({ match }) => {
            const { movieID } = match.params;
            return <MovieDetails id={ movieID } />
            }
          }
        />
      </main>
    );
  }
}

export default App;
