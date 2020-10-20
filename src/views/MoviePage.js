import React, { Component } from "react";
import SearchMovieForm from "../components/SearchMovieForm";
import { Link } from "react-router-dom";
// import router from "../router";
import getParams from "../utils/getParams";
import * as API from "../api/api";

export default class MoviePage extends Component {
  state = { movies: [], query: "" };

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getParams(prevProps.location.search);
    const { query: nextQuery } = getParams(this.props.location.search);
    console.log("prev:", prevQuery);
    console.log("next:", nextQuery);
    if (prevQuery !== nextQuery) {
      API.searchMovie(nextQuery).then((movies) => this.setState({ movies }));
    }
  }
  componentDidMount() {
    API.searchMovie("batman").then((movie) => console.log(movie.data.results));
  }

  handleChangeValue = (query) => {
    console.log(query);
    API.searchMovie(query).then((resData) => {
      console.log(resData);
      this.setState({ movies: resData.data.results });
    });
    // this.props.history.push({
    //   pathname: this.props.location.pathname,
    //   search: `query=${query}`,
    // });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  };

  render() {
    const { movies } = this.state;
    const { match } = this.props;
    return (
      <>
        <SearchMovieForm onSubmit={this.handleChangeValue} />

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
