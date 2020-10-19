import React, { Component } from "react";

export default class Fetch extends Component {
  state = {
    showListMovies: [],
  };

  render() {
    const { showListMovies } = this.state;
    return <ul>{showListMovies}</ul>;
  }
}
