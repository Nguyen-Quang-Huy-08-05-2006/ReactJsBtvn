import React, { Component } from "react";

type State = {
  isLogin: boolean;
};

class LoginStatus extends Component {
  constructor(props: {}) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }
  handleButton = () => {
    this.setState((prevState) => ({
      isLogin: !prevState.isLogin,
    }));
  };
  render() {
    const { isLogin } = this.state;
    return (
      <div>
        <h3>
          {isLogin ? "Ban da dang nhap" : "Vui long dang nhap de tiep tuc"}
        </h3>
        <button onClick={this.handleButton}>
          {isLogin ? "Dang xuat" : "Dang nhap"}
        </button>
      </div>
    );
  }
}

export default LoginStatus;
