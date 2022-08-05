import React, { Component } from "react";
import Header from "../Header/Header.js";
import Movies from "../Movies/Movies.js";
import MovieDetails from "../MovieDetails/MovieDetails.js";
import { Route } from 'react-router-dom'
import "./App.css";
import { scrubMovieData } from "../../utilities.js";
import { testAPI } from "../../api.js"


class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesToFilter: [],
      selectedMovie: "",
      error: "",
      resultsMessage: "",
      searchInput: "",
      sortInput: "",
    };
    this.setState = this.setState.bind(this)
  }

  componentDidMount() {
    testAPI('movies')
    .then((movies) => this.setState({ movies: scrubMovieData(movies.movies), moviesToFilter: scrubMovieData(movies.movies), error: "" }))
    .catch((error) =>
      this.setState({ error: "We're sorry, an error has occurred. Please try again later."})
    );
  }

  filterBySearchValue = (searchValue) => {
    const filteredMovies = this.state.moviesToFilter.filter(movie => movie.title.toLowerCase().includes(searchValue))
            
    if (!filteredMovies.length) {
      this.setState({ movies: [], resultsMessage: `There are currently no results for: '${searchValue}'`});
    } else {
      this.setState({ movies: filteredMovies, resultsMessage: `Now searching by: '${searchValue}'` })
    }
    this.clearInputs()
  }

  clearInputs() {
    this.setState({ searchInput: "" });
    this.setState({ sortInput: "" });
  }

  restoreHomePage = () => {
    this.setState({ movies: [...this.state.moviesToFilter], resultsMessage: ''});
    this.clearInputs();
  }

  clearOutMessage = () => {
    this.setState({ error: "", resultsMessage: "" })
  }

  render() {
    return (
      <main>
        <Header 
          state={this.state} 
          setState={this.setState} 
          filterBySearchValue={this.filterBySearchValue} 
          restoreHomePage={this.restoreHomePage} 
        />
        {this.state.error && <h2 className="message">⚠️ {this.state.error}</h2>}
        {this.state.resultsMessage && <h2 className="message">{this.state.resultsMessage}</h2>}
        <Route 
          exact path="/" 
          render={() => <Movies 
            movies={this.state.movies} 
            clearOutMessage={this.clearOutMessage}
            />}
         />

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
