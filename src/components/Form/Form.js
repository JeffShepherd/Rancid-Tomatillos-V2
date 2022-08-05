import React from "react";
import { Route, Link } from 'react-router-dom'
import "./Form.css";
import { 
  sortByAvgRating, 
  sortByTitle
 } from "../../utilities.js";


const Form = ({ 
  state, 
  setState,
  filterBySearchValue 
  }) => {

  function handleChange(event) {
    setState({ searchInput: event.target.value.toLowerCase() });
  }

  function submitSearch() {
    filterBySearchValue(state.searchInput)
  }

  function handleSort(event) {
    const sortValue = event.target.value;
    if (!!state.movies.length) {
      switch (sortValue) {
        case 'Freshness':
          setState({ 
            movies: sortByAvgRating(state.movies), 
            sortInput: event.target.value, 
            resultsMessage: `Now sorting by: '${sortValue}'` 
          });
          break;
        case 'Title':
          setState({ 
            movies: sortByTitle(state.movies), 
            sortInput: event.target.value, 
            resultsMessage: `Now sorting by: '${sortValue}'` 
          });
          break;
        default:
          break;
      }
    }
  }
    return (
      <>
      <Route path="/"
            render={() => {
              return (
                <form className="search-form">
                  <input 
                    onChange={(event) => handleChange(event)} 
                    placeholder='Search movies by title' type='search'
                    value={state.searchInput}
                    required
                  />
                  <Link className="search-link" to={`/`}>
                    <button className="search-button" 
                      onClick={(event) => submitSearch()}>Search
                    </button> 
                  </Link>
                </form>
              )}
            }
          />

      <Route exact path="/"
            render={() => {
              return (
                <form className="sort-form">
                  <label htmlFor="sortFormInput">Sort by: </label>
                  <select value={state.sortInput} onChange={(event) => handleSort(event)} id="sortFormInput" name="sort">
                    <option value="" defaultValue></option>
                    <option value="Freshness">Freshness</option>
                    <option value="Title">Title</option>
                  </select>
                </form>
              )}
            }
          />
    </>
    )
}

export default Form;
