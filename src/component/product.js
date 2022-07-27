import React, { Component } from "react";

export default class Product extends Component {
  render() {
    return (
      <div>
        <h1>this is product {this.props.match.params.id}</h1>
      </div>
    );
  }
}
