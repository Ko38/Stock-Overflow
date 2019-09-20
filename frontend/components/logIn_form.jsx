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
        // this.props.history.push("/"); 
      }, (error) => {

        this.setState({errorMessage: error.responseJSON[0]});
      });
  }

  fillDemoUser(e) {
    e.preventDefault();
    this.setState({
      usernameOrEmail: "DemoUser",
      password: "1234qwer",
      errorMessage: ""
    });
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
        <label>{this.state.errorMessage}</label>
        <button onClick={this.fillDemoUser.bind(this)} className="demoBtn robotoFont">Log In as Demo User</button>
      </form>
    );
  }
}