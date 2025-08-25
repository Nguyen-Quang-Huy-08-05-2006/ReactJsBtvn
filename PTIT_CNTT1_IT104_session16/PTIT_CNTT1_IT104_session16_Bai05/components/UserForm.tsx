import React, { Component, ChangeEvent, FormEvent } from "react";

type State = {
  name: string;
  email: string;
  age: string;
  error: string;
  submit: boolean;
};

class UserForm extends Component {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "",
      email: "",
      age: "",
      error: "",
      submit: false,
    };
  }
  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value } as unknown as Pick<State, keyof State>);
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, email, age } = this.state;
    if (!email.includes("@")) {
      this.setState({ error: "email khong hop le", submit: false });
      return;
    }

    if (parseInt(age) < 0 || isNaN(age) === true) {
      this.setState({ error: "tuoi khong hop le", submit: false });
      return;
    }

    this.setState({ error: "", submit: true });
  };

  handleClear = () => {
    this.setState({
      name: "",
      email: "",
      age: "",
      error: "",
      submit: false,
    });
  };

  render() {
    const { name, email, age, error, submit } = this.state;
    return (
      <div>
        <h3>Nhap thong tin</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            value={name}
            onChange={this.handleChange}
            type="text"
            placeholder="Ho ten"
          />{" "}
          <br />
          <input
            name="email"
            value={email}
            onChange={this.handleChange}
            type="text"
            placeholder="Email"
          />{" "}
          <br />
          <input
            name="age"
            value={age}
            onChange={this.handleChange}
            type="text"
            placeholder="Tuoi"
          />{" "}
          <br />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button onClick={this.handleClear}>xoa tat ca</button>
          <br />
          <button type="submit" onClick={this.handleSubmit}>
            Gui
          </button>
        </form>
        {submit && !error && (
          <div>
            <h3>Thong tin da nhap</h3>
            <p>name:{name}</p>
            <p>email:{email}</p>
            <p>age:{age}</p>
          </div>
        )}
      </div>
    );
  }
}

export default UserForm;
