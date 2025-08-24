import React from "react";

class SimpleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Email nhập vào:", this.state.email);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="Nhập email..."
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SimpleForm;
