import React from 'react';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      usernameFieldError: '',
      passwordFieldError: '',
      emailFieldError: ''
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
      }, 
      (error) => {
        for (let errorMessage of error.responseJSON[0]) {
          if (errorMessage.includes("Username")){
            this.setState({ usernameFieldError: errorMessage});
          } else if (errorMessage.includes("Password")){
            this.setState({ passwordFieldError: errorMessage });
          } else if (errorMessage.includes("Email")){
            this.setState({ emailFieldError: errorMessage });
          }
        }
      });
  }

  render() {
    return (
      <form className="formBody" onSubmit={this.handleSubmit.bind(this)}>
        <label>
          <b className="robotoFont">Username:</b>
          <input type="text" onChange={this.handleInput.bind(this)("username")} />
          <div className="error-text">{this.state.usernameFieldError}</div>
        </label> <br/>
        <label>
          <b className="robotoFont">Email:</b>
          <input type="text" onChange={this.handleInput.bind(this)("email")} />
          <div className="error-text">{this.state.emailFieldError}</div>
        </label> <br />
        <label>
          <b className="robotoFont">Password:</b>
          <input type="password" onChange={this.handleInput.bind(this)("password")} />
          <div className="error-text">{this.state.passwordFieldError} </div>
        </label> <br />
        <input type="submit" value="Sign Up" className="robotoFont"></input>
      </form>
    );
  }
}