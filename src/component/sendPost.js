import React, { Component } from "react";
import axios from "axios";

export default class SendPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
  }
  ChangeHandler = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  bodyChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  postHandler = () => {
    const Data = {
      title: this.state.title,
      body: this.state.body,
    };
    axios
      .post("https://jsonplaceholder.typicode.com/posts/", Data)
      .then((Response) => console.log(Response));
  };
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={this.ChangeHandler} />
        <br />
        <br />
        <label>Body:</label>
        <input type="text" value={body} onChange={this.bodyChangeHandler} />
        <br />
        <br />
        <button onClick={this.postHandler}>send Post</button>
      </div>
    );
  }
}
