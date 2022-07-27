import React, { Component } from "react";

export default class ErrorBoundaryB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorm: false,
      erroressage: "",
    };
  }
  componentDidCatch(error, info) {
    this.setState({
      error: true,
      erroressage: error,
    });
  }
  render() {
    if (this.state.error) {
      return <p>{this.state.erroressage}</p>;
    } else {
      return this.props.children;
    }
  }
}
