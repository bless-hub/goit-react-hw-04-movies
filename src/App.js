import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./views/HomePage";
// import MoviePage from "./views/MoviePage";
// import MovieDetails from "./views/MovieDetailsPage";
import routes from "./routes";
import Loader from "./utils/Loader";

// const HomePageAsync = lazy(
//   () => import("./views/HomePage") /* webpackChunkName: "home-page" */
// );
const MoviePageAsync = lazy(
  () => import("./views/MoviePage") /* webpackChunkName: "home-page" */
);
const MovieDetailsAsync = lazy(
  () => import("./views/MovieDetailsPage") /* webpackChunkName: "home-page" */
);

const App = () => (
  <>
    <Navigation />
    <>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path={routes.home} exact component={HomePage} />
          <Route path={routes.movies} exact component={MoviePageAsync} />
          <Route path={routes.movieDetails} component={MovieDetailsAsync} />
        </Switch>
      </Suspense>
    </>
  </>
);
export default App;
