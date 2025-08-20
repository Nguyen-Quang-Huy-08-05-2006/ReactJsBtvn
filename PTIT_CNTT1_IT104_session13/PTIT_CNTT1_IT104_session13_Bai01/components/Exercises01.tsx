import React, { Component } from "react";

type StateType = {
  name: string;
};

class Exercises01 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "Nguyễn Văn A",
    };
  }

  render() {
    return (
      <div>
        <h1>Xin chào, mình là {this.state.name}</h1>
      </div>
    );
  }
}

export default Exercises01;
