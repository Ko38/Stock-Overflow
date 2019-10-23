import React from "react";
import SideBar from "./sideBar";

class AskQuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      errorMessage: ""
    };
  }

  onInputChange(type) {
    return (e) => {
      this.setState({
        [type]: e.target.value
      });
    };
  }

  onSubmit(e){
    e.preventDefault();
    this.props.askQuestion(Object.assign({}, this.state)).then((question) => {
      this.props.history.push("/questions");
    }, (error) => {
        this.setState({ errorMessage: error.responseJSON[0] });
    });
  }

  render(){
    return(
      <div className="questionWall">
        <SideBar />
        <div className="mid">
        <div className="questionHeader">
          Ask a question
        </div>
          <form onSubmit={this.onSubmit.bind(this)}>
            <label className="questionWallLabels">Title
              <input type="text" onChange={this.onInputChange.bind(this)("title")}></input>
            </label>
            <label className="questionWallLabels">Body
              <textarea className="bodyTextArea" onChange={this.onInputChange.bind(this)("body")}></textarea>
            </label>
            <input type="submit" value="Post Your Question"/>
            <label className="error-text">{this.state.errorMessage}</label>
          </form>
        </div>
      </div>
    );
  }
}

export default AskQuestionForm;