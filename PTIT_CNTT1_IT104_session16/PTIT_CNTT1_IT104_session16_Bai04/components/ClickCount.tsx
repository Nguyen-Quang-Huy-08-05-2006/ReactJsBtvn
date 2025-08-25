import React, { Component } from "react";

type State = {
  count: number;
};

class ClickCount extends Component {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  render() {
    return (
      <div>
        <h2>Click count</h2>
        <p>So lan da click:{this.state.count}</p>
        <button onClick={this.handleCount}>CLICK ME</button>
      </div>
    );
  }
}

export default ClickCount;
