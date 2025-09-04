import React, { Component } from "react";
import Form from "react-bootstrap/Form";

export default class Bai02 extends Component {
  render() {
    return (
      <div>
        <>
          <Form.Control size="lg" type="text" placeholder="Large text" />
          <br />
          <Form.Control type="text" placeholder="Normal text" />
          <br />
          <Form.Control size="sm" type="text" placeholder="Small text" />
        </>
      </div>
    );
  }
}
