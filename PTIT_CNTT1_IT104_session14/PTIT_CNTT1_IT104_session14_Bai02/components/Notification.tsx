import React, { Component } from "react";

class Notification extends Component {
  componentDidMount(): void {
    console.log("Component đã được mount!");
  }
  render() {
    return (
      <div>
        <Notification />
      </div>
    );
  }
}

export default Notification;
