import React, { Component } from "react";
import queryString from "query-string";

export default class Blogs extends Component {
  parseQuery = () => {
    console.log(this.props.location.search);
    const result = queryString.parse(this.props.location.searchs);
    console.log(result);
  };
  render() {
    return (
      <div>
        <h1>the another is {this.props.match.params.author}</h1>
        <p>{this.props.location.search}</p>
        <button onClick={this.parseQuery}>show query</button>
      </div>
    );
  }
}
