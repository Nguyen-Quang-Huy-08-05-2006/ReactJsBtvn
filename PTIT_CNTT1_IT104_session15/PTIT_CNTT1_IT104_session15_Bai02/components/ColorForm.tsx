import React from "react";

class ColorForm extends React.Component {
  state = {
    color: "",
    selectedColor: "",
  };

  handleChange = (event) => {
    this.setState({ color: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ selectedColor: this.state.color });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Nhập màu sắc: </label>
          <input
            type="text"
            value={this.state.color}
            onChange={this.handleChange}
          />
          <button type="submit">Gửi</button>
        </form>
        {this.state.selectedColor && (
          <div style={{ marginTop: "20px" }}>
            <p>
              Mã màu bạn nhập: <b>{this.state.selectedColor}</b>
            </p>
            <div
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: this.state.selectedColor,
                border: "1px solid #000",
              }}
            ></div>
          </div>
        )}
      </div>
    );
  }
}

export default ColorForm;
