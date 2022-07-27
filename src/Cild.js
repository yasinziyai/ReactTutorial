import React, { Component } from "react";

export default class Cild extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("Cildconstructor");
  }
  componentDidMount() {
    console.log("Cild componentDidMount");
  }
  componentDidUpdate() {
    console.log("Cild componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("Cild componentWillUnmount");
  }
  render() {
    console.log("Cild render");
    return <div>Cild</div>;
  }
}
