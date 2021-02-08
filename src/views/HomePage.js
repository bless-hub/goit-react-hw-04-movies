import React, { Component } from "react";
import { Link } from "react-router-dom";
import routes from "../routes";
import style from "./views.module.css";

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

    return (
      <div className={style.homepage}>
        <h2 className={style.heading}>TRENDING TODAY</h2>
        <ul className={style.list}>
          {movies.map((movie) => (
            <li key={movie.id} className={style.item}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
                className={style.poster_search}
              />

              <Link
                className={style.link}
                to={{
                  pathname: `${routes.movies}/${movie.id}`,
                  state: { from: this.props.location },
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
