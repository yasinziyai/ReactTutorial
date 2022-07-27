import React, { Component } from "react";

export default class AboutUs extends Component {
  reset = () => {
    // میتواند به روت قبلی برگردد
    // this.props.history.push("./blogs");
    //نمیتواند به روت قبلی بازگردد
    this.props.history.replace("./blogs");
  };
  render() {
    return (
      <div>
        <h1>AboutUs</h1>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}
