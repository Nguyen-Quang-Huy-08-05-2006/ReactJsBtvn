import React, { Component } from "react";

interface CompanyState {
  name: string;
}

class Company extends Component<{}, CompanyState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "Học code để đi làm",
    };
  }

  changeState = () => {
    this.setState({ name: "Học code sẽ thành công. Cố lên!!" });
  };

  shouldComponentUpdate(nextProps: {}, nextState: CompanyState) {
    console.log("State mới:", nextState.name);
    return false;
  }

  render() {
    console.log("Render với:", this.state.name);
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.changeState}>Change state</button>
      </div>
    );
  }
}

export default Company;
