import React, { Component } from "react";

export default class RefCild extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }
  sshowref = () => {
    console.log(this.input.current);
  };
  render() {
    return (
      <div>
        <button onClick={this.sshowref}>show</button>
        <input ref={this.input} type="text" />
      </div>
    );
  }
}
