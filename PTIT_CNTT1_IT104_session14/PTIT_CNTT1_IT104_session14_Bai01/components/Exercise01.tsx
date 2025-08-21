import React, { Component } from "react";

type State = {
  username: string;
};

class Exercise01 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      username: "Huy",
    };
  }

  render() {
    return <div>{this.state.username}</div>;
  }
}
export default Exercise01;
