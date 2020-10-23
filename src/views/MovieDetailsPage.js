import React, { Component, lazy, Suspense } from "react";
import * as API from "../api/api";
import { NavLink, Switch, Route } from "react-router-dom";
import style from "./views.module.css";
import routes from "../routes";
// import Loader from "../utils/Loader";
import Loader from "../utils/Loader";
// import Cast from "./Cast";
// import Reviews from "./Reviews";

const CastAsync = lazy(() => import("./Cast"));
const ReviewsAsync = lazy(() => import("./Reviews"));

export default class MovieDetails extends Component {
  state = {
    details: null,
  };

  componentDidMount() {
    const { match } = this.props;

    API.searchInfo(match.params.movieId).then((details) =>
      this.setState({ details })
    );
    API.searchInfo(match.params.movieId).then(console.log);
  }

  onBackButton = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { details } = this.state;
    const { match } = this.props;
    const { url } = match;
    return (
      <div className={style.page}>
        <button
          onClick={this.onBackButton}
          type="button"
          className={style.button}
        >
          Back page
        </button>
        <br />
        {details && (
          <div className={style.card}>
            {details.data.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${details.data.poster_path}`}
                alt=""
                className={style.poster}
              />
            ) : (
              <img
                src="https://via.placeholder.com/350x500.png?text=Image%20not%20found"
                alt=""
                className={style.poster}
              />
            )}

            <div className={style.wrapper}>
              <h2 className={style.title}>
                {details.data.original_title} ({details.data.release_date})
              </h2>
              <p className={style.overview}>
                User score: {details.data.vote_average * 10}%
              </p>
              <h3 className={style.title}>Overview</h3>
              {/* <br /> */}
              <p className={style.overview}>{details.data.overview}</p>
              <h3 className={style.title}>Genres</h3>
              {details.data.genres.reduce((acc, el) => `${acc} ${el.name}`, "")}
            </div>
            <ul className={style.button_list}>
              <li>
                <NavLink to={`${url}/cast`} className={style.cast_link}>
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink to={`${url}/reviews`} className={style.reviews_link}>
                  Reviews
                </NavLink>
              </li>
            </ul>
            <Suspense fallback={<Loader />}>
              <Switch>
                <Route exact path={routes.movieCast} component={CastAsync} />
                <Route
                  exact
                  path={routes.movieReviews}
                  component={ReviewsAsync}
                />
              </Switch>
            </Suspense>
          </div>
        )}
      </div>
    );
  }
}
