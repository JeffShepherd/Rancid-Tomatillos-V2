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
      <form>
        <input 
        onChange={(event) => this.handleChange(event)} 
        placeholder='Search movies' type='text'
        value={this.state.searchInput}/>
        <button onClick={(event) => this.submitSearch(event)}>submit</button>
      </form>
    )
  }

}

export default Form;
