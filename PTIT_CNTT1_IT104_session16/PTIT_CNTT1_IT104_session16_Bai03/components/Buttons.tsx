import React, { Component } from "react";
import "./button.css";

export default class extends Component {
  render() {
    return (
      <span>
        <div>
          <button className="primary">Primary</button>
          <button className="secondary">Secondary</button>
          <button className="success">Success</button>
          <button className="warning">Warning</button>
          <button className="danger">Danger</button>
          <button className="info">Info</button>
          <button className="light">Light</button>
          <button className="dark">Dark</button>
          <button className="link">
            <a href="">Link</a>
          </button>
        </div>
      </span>
    );
  }
}
