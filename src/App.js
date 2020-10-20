import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./views/HomePage";
import MoviePage from "./views/MoviePage";
import MovieDetails from "./views/MovieDetailsPage";
import Cast from "./views/Cast";
import Reviews from "./views/Reviews";

import routes from "./router";

const App = () => (
  <>
    <Navigation />
    <>
      <Switch>
        <Route path={routes.home} exact component={HomePage} />
        <Route path="/movies" exact component={MoviePage} />
        <Route path="/movies/:movieId" component={MovieDetails} />
        <Route path="/movies/:movieId/cast" component={Cast} />
        <Route path="/movies/:movieId/reviews" component={Reviews} />
      </Switch>
    </>
  </>
);

export default App;
