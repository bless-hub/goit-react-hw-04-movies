import React, { Component } from "react";
import * as API from "../api/api";

export default class MovieDetails extends Component {
  state = {
    details: null,
  };

  componentDidMount() {
    API.searchInfo(this.props.match.params.movieId).then((details) =>
      this.setState({ details })
    );
  }

  render() {
    return (
      <>
        {this.state.details && (
          <>
            <img src={this.state.details.image} alt={this.state.details.name} />
          </>
        )}
      </>
    );
  }
}
