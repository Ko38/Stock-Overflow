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

  login(){
    this.props.logInUser(Object.assign({}, this.state))
      .then(() => {
        // this.props.history.push("/"); 
      }, (error) => {
        this.setState({ errorMessage: error.responseJSON[0] });
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.login();
  }

  fillDemoUserAndLogin(e) {
    e.preventDefault();
    this.setState({
      usernameOrEmail: "DemoUser",
      password: "1234qwer",
      errorMessage: ""
    });
    setTimeout(() => {
      this.login();
    }, 1000);
  }

  render() {
    return (
      <form className="formBody" onSubmit={this.handleSubmit.bind(this)}>
        <label className="robotoFont"> <b>Username/Email:</b>
          <input type="text" onChange={this.handleInput.bind(this)("usernameOrEmail")} value={this.state.usernameOrEmail}/>
        </label> <br/>
        <label>
          <b className="robotoFont"> Password: </b>
          <input  type="password" onChange={this.handleInput.bind(this)("password")} value={this.state.password}/>
        </label> <br />
        <input className="robotoFont" type="submit" value="Log In" />
        <br />
        <label className="error-text">{this.state.errorMessage}</label>
        <button onClick={this.fillDemoUserAndLogin.bind(this)} className="demoBtn robotoFont">Log In as Demo User</button>
      </form>
    );
  }
}