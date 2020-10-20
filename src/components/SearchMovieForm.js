import React, { Component } from "react";

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
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={value} onChange={this.handleChangeValue} />
        <button type="submit">Search Movie</button>
      </form>
    );
  }
}
