import React, { Component } from "react";
import * as API from "../api/api";
import style from "./views.module.css";

export default class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const { match } = this.props;
    const { movieId } = match.params;
    API.Reviews(movieId).then((res) => {
      console.log("Reviws :", res);
      this.setState({ reviews: res.data.results });
    });
  }

  render() {
    const { reviews } = this.state;
    return reviews.length > 0 ? (
      <ul className={style.list_reviews}>
        {reviews.map((el) => (
          <li className={style.item_reviews} key={el.id}>
            <h4 className={style.item_reviews}>{el.author}</h4>
            <p>{el.content}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p style={{ width: "250px", textAlign: "center" }}>
        No reviews at the moment...
      </p>
    );
  }
}
