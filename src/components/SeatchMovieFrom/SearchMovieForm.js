import React, { Component } from "react";
import style from "./SearchMovieForm.module.css";

export default class SearchMovieForm extends Component {
  state = {
    value: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });
  };

  handleChangeValue = (query) => {
    this.setState({ value: query.target.value });
  };

  render() {
    const { value } = this.state;
    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
        <input
          className={style.input}
          type="text"
          value={value}
          onChange={this.handleChangeValue}
        />
        <button className={style.button} type="submit">
          Search Movie
        </button>
      </form>
    );
  }
}
