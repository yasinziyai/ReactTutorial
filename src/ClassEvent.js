import React, { Component } from "react";

export default class ClassEvent extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      option: "option1",
    };
  }

  render() {
    // const { text, option } = this.state;
    return <button onClick={this.props.sayHi}>submit</button>;
  }
}
