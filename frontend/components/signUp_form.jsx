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
      <form className="formBody" onSubmit={this.handleSubmit.bind(this)}>
        <label>
          <b>Username:</b>
          <input type="text" onChange={this.handleInput.bind(this)("username")} />
        </label> <br/>
        <label>
          <b>Email:</b>
          <input type="text" onChange={this.handleInput.bind(this)("email")} />
        </label> <br />
        <label>
          <b>Password:</b>
          <input type="password" onChange={this.handleInput.bind(this)("password")} />
        </label> <br />
        
        <input type="submit" value="Sign Up"></input>
      </form>
    );
  }
}