import React, { Component } from "react";
import "./Form.css";
// import Movies from "../Movies/Movies.js";
// import { Link } from 'react-router-dom'
import { 
  sortByAvgRating, 
  sortByTitle
 } from "../utilities.js";

const Form = ({ 
  state, 
  handleSortTypes,
  setState,
  filterBySearchValue }) => {

  function handleChange(event) {
    setState({ searchInput: event.target.value.toLowerCase() });
  }

  function submitSearch(event) {
    event.preventDefault();
    filterBySearchValue(state.searchInput)
    clearInputs();
  }

  function clearInputs() {
    setState({ searchInput: '' });
    setState({ sortInput: '' });
  }

  function handleSort(event) {
    const sortValue = event.target.value;
    if (!!state.movies.length) {
      switch (sortValue) {
        case 'Freshness':
          setState({ movies: sortByAvgRating(state.movies), sortInput: event.target.value, resultsMessage: `Now sorting by: '${sortValue}'` });
          break;
        case 'Title':
          setState({ movies: sortByTitle(state.movies), sortInput: event.target.value, resultsMessage: `Now sorting by: '${sortValue}'` });
          break;
        default:
          break;
      }
    }
    // setState({ ...state, sortInput: event.target.value })
    handleSortTypes(event.target.value);
    console.log(event.target.value);
  }
console.log('state.sortInput: ', state.sortInput)
    return (
     <>
        <form className="search-form">
          <input 
          onChange={(event) => handleChange(event)} 
          placeholder='Search movies by title' type='search'
          value={state.searchInput}
          required
          />
          <button className="search-button click" onClick={(event) => submitSearch(event)}>🔍</button>
        </form>
       <form className="sort-form">
         <label htmlFor="sortFormInput">Sort by: </label>
         <select onChange={(event) => handleSort(event)} id="sortFormInput" name="sort">
           <option value="" defaultValue></option>
           <option value="Freshness">Freshness</option>
           <option value="Title">Title</option>
         </select>
       </form>
     </>
    )
}

export default Form;
