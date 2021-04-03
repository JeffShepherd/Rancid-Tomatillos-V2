import React, { Component } from "react";
import Header from "../Header/Header.js";
import Movies from "../Movies/Movies.js";
import MovieDetails from "../MovieDetails/MovieDetails.js";
import { Route } from 'react-router-dom'
import "./App.css";
import { 
  scrubMovieData,
  sortByAvgRating, 
  sortByTitle
 } from "../utilities.js";


class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesToFilter: [],
      selectedMovie: "",
      error: "",
      resultsMessage: "",
    };
  }

  componentDidMount() {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
    .then((response) => response.json())
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

    this.resetSortValue();
  }

  handleSortTypes = (sortValue) => {
    if (!!this.state.movies.length) {
      switch (sortValue) {
        case 'Freshness':
          this.setState({ movies: sortByAvgRating(this.state.movies), resultsMessage: `Now sorting by: '${sortValue}'` });
          break;
        case 'Title':
          this.setState({ movies: sortByTitle(this.state.movies), resultsMessage: `Now sorting by: '${sortValue}'` });
          break;
        default:
          break;
      }
    }
  }

  resetSortValue = () => {
    document.getElementById('sortFormInput').value = '';
  }

  restoreHomePage = () => {
    this.setState({ movies: [...this.state.moviesToFilter], resultsMessage: ''});
    this.resetSortValue();
  }

  render() {
    return (
      <main>
        <Header handleSortTypes={this.handleSortTypes}filterBySearchValue={this.filterBySearchValue} restoreHomePage={this.restoreHomePage} />
        {this.state.error && <h2 className="message">⚠️ {this.state.error}</h2>}
        {this.state.resultsMessage && <h2 className="message">{this.state.resultsMessage}</h2>}
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
