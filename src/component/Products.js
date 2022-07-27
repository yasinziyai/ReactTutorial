import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Products extends Component {
  render() {
    return (
      <div>
        <h1>Products:</h1>
        <ul>
          <li>
            <Link to="Products/1">Products 1</Link>
          </li>
          <li>
            <Link to="Products/2">Products 2</Link>
          </li>
          <li>
            <Link to="Products/3">Products 3</Link>
          </li>
          <li>
            <Link to="Products/4">Products 4</Link>
          </li>
        </ul>
      </div>
    );
  }
}
