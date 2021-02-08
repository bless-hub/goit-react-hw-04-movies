import React from "react";
import { NavLink } from "react-router-dom";
import ThemeMode from "../ThemeMode/ThemeMode";

import style from "./navigation.module.css";

const Navigation = ({ onChange, darkMode }) => (
  <header className={style.header}>
    <ThemeMode onChange={onChange} darkMode={darkMode} />
    <ul className={style.list}>
      <li className={style.item}>
        <NavLink
          exact
          to="/"
          className={style.link}
          activeClassName={style.link_active}
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          className={style.link}
          activeClassName={style.link_active}
        >
          MOVIES
        </NavLink>
      </li>
    </ul>
  </header>
);

export default Navigation;
