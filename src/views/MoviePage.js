import React, { Component } from "react";
import SearchMovieForm from "../components/SeatchMovieFrom/SearchMovieForm";
import { Link } from "react-router-dom";
import routes from "../routes";
import getParams from "../utils/getParams";
import * as API from "../api/api";
import style from "./views.module.css";

export default class MoviePage extends Component {
  state = { movies: [] };

  componentDidMount() {
    const { query } = getParams(this.props.location.search);
    if (query) {
      API.searchMovie(query).then((resData) => {
        this.setState({ movies: resData.data.results });
      });
      console.log(this.setState);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getParams(prevProps.location.search);
    const { query: nextQuery } = getParams(this.props.location.search);
    console.log("prev:", prevQuery);
    console.log("next:", nextQuery);
    if (prevQuery !== nextQuery) {
      API.searchMovie(nextQuery);
    }
  }

  handleSubmitValue = (query) => {
    const { history } = this.props;

    API.searchMovie(query).then((resData) => {
      console.log(resData);
      this.setState({ movies: resData.data.results });
    });
    history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies } = this.state;
    const { location } = this.props;

    return (
      <div className={style.movies}>
        <SearchMovieForm onSubmit={this.handleSubmitValue} />

        <ul className={style.list}>
          {movies.map((movie) => (
            <li key={movie.id} className={style.item}>
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt=""
                  className={style.poster_search}
                />
              ) : (
                <img
                  src={`https://via.placeholder.com/150x200.png?text=Image%20not%20found`}
                  alt=""
                  className={style.poster_search}
                />
              )}

              <Link
                className={style.link}
                to={{
                  pathname: `${routes.movies}/${movie.id}`,
                  state: { from: location },
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
