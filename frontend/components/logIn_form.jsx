import React from "react";

export default class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameOrEmail: "",
      password: "",
      errorMessage: ""
    };
  }

  handleInput(type) {
    return (e) => {
      this.setState({ 
        [type]: e.target.value 
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logInUser(Object.assign({}, this.state))
      .then( () => { 
        this.props.history.push("/"); 
      }, (error) => {

        this.setState({errorMessage: error.responseJSON[0]});
      });
  }

  render() {
    return (
      <form className="formBody" onSubmit={this.handleSubmit.bind(this)}>
        <label> <b>Username/Email:</b>
          <input type="text" onChange={this.handleInput.bind(this)("usernameOrEmail")} />
        </label> <br/>
        <label>
          <b> Password: </b>
          <input type="password" onChange={this.handleInput.bind(this)("password")} />
        </label> <br />
        <input type="submit" value="Log In" />
        <br />
        <label>{this.state.errorMessage}</label>
      </form>
    );
  }
}