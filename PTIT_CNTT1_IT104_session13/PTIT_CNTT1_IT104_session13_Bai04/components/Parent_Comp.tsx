import React, { Component } from "react";
import Children_Comp from "./Children_Comp";

type StateType = {
  name: string;
};

class Parent_Comp extends Component<Record<string, never>, StateType> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      name: "Nguyễn Văn Nam",
    };
  }

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h3>Họ và tên bên component cha: {this.state.name}</h3>
        <Children_Comp name={this.state.name} />
      </div>
    );
  }
}

export default Parent_Comp;
