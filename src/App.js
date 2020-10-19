import React from "react";
import { Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./views/HomePage";
import MoviePage from "./views/MoviePage";
import MovieDetailsPage from "./views/MovieDetailsPage";
import Cast from "./views/Cast";
import Reviews from "./views/Reviews";

const App = () => (
  <>
    <Navigation />
    <>
      <Route path="/" exact component={HomePage} />
      <Route path="/movies" component={MoviePage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route path="/movies/:movieId/cast" component={Cast} />
      <Route path="/movies/:movieId/reviews" component={Reviews} />
    </>
  </>
);

export default App;
