import React from "react";

class ProgressForm extends React.Component {
  state = {
    progress: 0,
    submittedProgress: null,
  };

  handleChange = (event) => {
    this.setState({ progress: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ submittedProgress: this.state.progress });
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Tiến độ hoàn thành:{" "}
            {this.state.submittedProgress !== null
              ? this.state.submittedProgress
              : ""}{" "}
            %
          </label>
          <br />
          <input
            type="range"
            min="0"
            max="100"
            value={this.state.progress}
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ProgressForm;
