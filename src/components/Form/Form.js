import React, { Component } from "react";
import "./Form.css";
// import Movies from "../Movies/Movies.js";
// import { Link } from 'react-router-dom'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: ''
    }
  }

  handleChange = (event) => {
    this.setState({ searchInput: event.target.value.toLowerCase() });
  }

  submitSearch(event) {
    event.preventDefault();
    this.props.setSearchQuery(this.state.searchInput)
    this.clearInputs();
  }

  clearInputs() {
    this.setState({ searchInput: ''});
  }

  render() {
    return (
     <>
        <form className="search-form">
          <input 
          onChange={(event) => this.handleChange(event)} 
          placeholder='Search movies by title' type='search'
          value={this.state.searchInput}
          required
          />
          <button className="search-button click" onClick={(event) => this.submitSearch(event)}>🔍</button>
        </form>
       <form className="sort-form">
         <label for="sortFormInput">Sort by: </label>
         <select id="sortFormInput" name="sort">
           <option value="" selected></option>
           <option value="average_rating">Freshness</option>
           <option value="title">Title</option>
           <option value="release_date">Release Date</option>
         </select>
       </form>
     </>
    )
  }

}

export default Form;
