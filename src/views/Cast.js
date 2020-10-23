import React, { Component } from "react";
import * as API from "../api/api";
import style from "./views.module.css";

export default class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const { match } = this.props;
    const { movieId } = match.params;
    API.Cast(movieId).then((res) => {
      console.log("Res :", res);
      this.setState({ cast: res.data.cast });
    });
  }

  render() {
    const { cast } = this.state;

    return (
      <ul className={style.cast_list}>
        {cast.map((actor) => (
          <li className={style.item_list} key={actor.id}>
            <h4>{actor.name}</h4>
            <h4>{actor.character}</h4>
            {actor.profile_path ? (
              <img
                className={style.img_cast}
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt=""
              />
            ) : (
              <img
                className={style.img_cast}
                src={`https://via.placeholder.com/150x200.png?text=Image%20not%20found`}
                alt=""
              />
            )}
          </li>
        ))}
      </ul>
    );
  }
}
