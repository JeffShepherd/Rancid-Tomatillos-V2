import React, { Component } from "react";
import "./Form.css";
// import Movies from "../Movies/Movies.js";
// import { Link } from 'react-router-dom'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      sortInput: ''
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
    this.setState({ sortInput: '' });
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
         <label htmlFor="sortFormInput">Sort by: </label>
         <select onChange={(event) => this.props.handleSortTypes(event.target.value)} id="sortFormInput" name="sort">
           <option value="" defaultValue></option>
           <option value="Freshness">Freshness</option>
           <option value="Title">Title</option>
         </select>
       </form>
     </>
    )
  }

}

export default Form;
