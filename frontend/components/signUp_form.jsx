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
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(Object.assign({}, this.state))
      .then(() => { 
        this.props.history.push("/"); 
      });
  }

  render() {
    return (
      <form>
        <label>
          Username:
          <input type="text" onChange={this.handleInput.bind(this)("username")} />
        </label> <br/>
        <label>
          Password:
          <input type="password" onChange={this.handleInput.bind(this)("password")} />
        </label> <br />
        <label>
          Email:
          <input type="text" onChange={this.handleInput.bind(this)("email")} />
        </label> <br />
        <button onClick={this.handleSubmit.bind(this)}>Sign Up</button>
      </form>
    );
  }
}