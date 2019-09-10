import React from 'react';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.processForm(Object.assign({}, this.state))
      .then(() => alert("account created"));
  }

  render() {
    return (
      <form>
        <label>
          Username:
          <input type="text" onChange={this.handleInput.bind(this)("username")} />
        </label>
        <label>
          Password:
          <input type="password" onChange={this.handleInput.bind(this)("password")} />
        </label>
        <label>
          Email:
          <input type="text" onChange={this.handleInput.bind(this)("email")} />
        </label>
        <button onClick={this.handleSubmit.bind(this)}>{this.props.buttonText}</button>
      </form>
    );
  }
}