import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  clickHandler = () => {
    const random = Math.random();
    if (random > 0.8) {
      throw new Error("An Error occured yasin");
    }
  };
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>click</button>
      </div>
    );
  }
}
