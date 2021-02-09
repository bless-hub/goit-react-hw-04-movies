import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import routes from "../routes";
import style from "./views.module.css";

import * as API from "../api/api";
window.addEventListener("click", (e) => console.log(e.target));
function HomePage() {
  const [movies, setMovies] = useState({ results: [] });

  useEffect(() => {
    API.popularMovie().then((resData) => {
      const fetchData = resData;

      setMovies(fetchData.data);
    });
  }, []);

  return (
    <div className={style.homepage}>
      <h2 className={style.heading}>TRENDING TODAY</h2>
      <ul className={style.list}>
        {movies.results.map((movie) => (
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
export default HomePage;
