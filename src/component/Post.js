import React, { Component } from "react";

export default class Post extends Component {
  render() {
    const { body, title, deletePost } = this.props;
    return (
      <div
        style={{ border: "1px grey solid", margin: "10px", padding: "0 20px" }}
      >
        <h2>{title}</h2>
        <p>{body}</p>
        <button onClick={deletePost}>Delete</button>
      </div>
    );
  }
}
