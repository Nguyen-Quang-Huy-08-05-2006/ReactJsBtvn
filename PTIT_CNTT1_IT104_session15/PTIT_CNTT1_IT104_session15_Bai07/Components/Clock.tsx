import React, { Component } from "react";

interface ClockState {
  time: string;
}

class Clock extends Component<{}, ClockState> {
  private timerID?: NodeJS.Timeout;

  constructor(props: {}) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  }

  render() {
    return (
      <div>
        <h2>Thời gian hiện tại: {this.state.time}</h2>
      </div>
    );
  }
}

export default Clock;
