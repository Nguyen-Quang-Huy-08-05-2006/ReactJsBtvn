import React, { Component, ChangeEvent, FormEvent } from "react";

interface FormState {
  gender: string;
}

class GenderForm extends Component<{}, FormState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      gender: "",
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ gender: e.target.value });
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Giới tính đã chọn:", this.state.gender);
  };

  render() {
    return (
      <div style={{ width: "300px", margin: "20px auto" }}>
        <h3>Giới tính:</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="radio"
              name="gender"
              value="Nam"
              checked={this.state.gender === "Nam"}
              onChange={this.handleChange}
            />
            Nam
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="Nữ"
              checked={this.state.gender === "Nữ"}
              onChange={this.handleChange}
            />
            Nữ
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="Khác"
              checked={this.state.gender === "Khác"}
              onChange={this.handleChange}
            />
            Khác
          </label>
          <br />

          <button type="submit">Submit</button>
        </form>

        {this.state.gender && (
          <p>👉 Bạn đã chọn giới tính: {this.state.gender}</p>
        )}
      </div>
    );
  }
}

export default GenderForm;
