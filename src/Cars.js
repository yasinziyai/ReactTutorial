import React, { Component } from "react";
import { v4 } from "uuid";
export default class Cars extends Component {
  constructor() {
    super();
    this.state = {
      cars: [
        { id: 1, name: "ferrari" },
        { id: 2, name: "benz" },
        { id: 3, name: "bmw" },
        { id: 4, name: "206" },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>My Cars:</h1>
        {this.state.cars.map((car) => (
          <p key={v4()}>Hi I am car from {car.name}</p>
        ))}
      </div>
    );
  }
}
// npm i uuid
