import React, { Component } from "react";
import { Link } from "react-router-dom";

import * as API from "../api/api";

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    API.popularMovie().then((resData) => {
      console.log(resData);
      this.setState({ movies: resData.data.results });
    });
  }

  render() {
    const { movies } = this.state;
    const { match } = this.props;

    return (
      <>
        <h2>Trending today</h2>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`${match.url}/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
