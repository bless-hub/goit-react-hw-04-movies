import React, { lazy, Suspense, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./views/HomePage";

// import MoviePage from "./views/MoviePage";
// import MovieDetails from "./views/MovieDetailsPage";
import routes from "./routes";
import Loader from "./utils/Loader";
import "./index.css";

// const HomePageAsync = lazy(
//   () => import("./views/HomePage") /* webpackChunkName: "home-page" */
// );
const MoviePageAsync = lazy(
  () => import("./views/MoviePage") /* webpackChunkName: "home-page" */
);
const MovieDetailsAsync = lazy(
  () => import("./views/MovieDetailsPage") /* webpackChunkName: "home-page" */
);

function App() {
  const [darkMode, setDarkMode] = useState(getInitialMode());
  const changeTheme = () => setDarkMode((prevMode) => !prevMode);

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);
  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    return savedMode || false;
  }
  return (
    <div className={darkMode ? "darkMode" : "lightMode"}>
      <Navigation onChange={changeTheme} darkMode={darkMode} />
      <>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path={routes.home} exact component={HomePage} />
            <Route path={routes.movies} exact component={MoviePageAsync} />
            <Route path={routes.movieDetails} component={MovieDetailsAsync} />
          </Switch>
        </Suspense>
      </>
    </div>
  );
}
export default App;
