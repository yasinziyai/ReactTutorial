import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    return (
      <div>
        {this.state.isLoggedIn && <h1>wellcome</h1>}
        {/* {this.state.isLoggedIn ? <h1>wellcome</h1> : <button>login</button>} */}
      </div>
    );
  }
}
export default Login;
