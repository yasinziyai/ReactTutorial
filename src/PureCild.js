import React, { PureComponent } from "react";

export default class PureCild extends PureComponent {
  render() {
    console.log("Cild is rendered");
    return <div>PureCild {this.props.text}</div>;
  }
}
//shallow coparison
