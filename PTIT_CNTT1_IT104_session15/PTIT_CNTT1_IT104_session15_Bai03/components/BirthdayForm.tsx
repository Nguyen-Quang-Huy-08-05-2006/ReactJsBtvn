import React from "react";

class BirthdayForm extends React.Component {
  state = {
    birthday: "",
    selectedBirthday: "",
  };

  handleChange = (event) => {
    this.setState({ birthday: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ selectedBirthday: this.state.birthday });
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <form onSubmit={this.handleSubmit}>
          <label>Nhập ngày sinh: </label>
          <input
            type="date"
            value={this.state.birthday}
            onChange={this.handleChange}
          />
          <button type="submit">Gửi</button>
        </form>

        {this.state.selectedBirthday && (
          <div style={{ marginTop: "20px" }}>
            <p>
              Ngày sinh của bạn là: <b>{this.state.selectedBirthday}</b>
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default BirthdayForm;
