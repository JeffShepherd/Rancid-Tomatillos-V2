import React, { Component } from "react";
import movieData from "./src/testData.js";
import Header from "./Header/Header.js";

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  render() {
    return (
      <main>
        <Header />
        <Movies />
      </main>
    );
  }
}

export default App;
