import React from "react";
import SideBar from "./sideBar";

class EditQuestionForm extends React.Component {

  constructor(props) {
    super(props);
    let title, body;
    if (this.props.question) {
      title = this.props.question.title;
      body = this.props.question.body;
    }

    this.state = {
      title: title || "",
      body: body || "",
      id: props.match.params.questionId,
      errorMessage: ""
    };
  }

  componentDidMount() {

    this.props.fetchQuestion(this.props.match.params.questionId).then( (payload) =>{
      this.setState({
        title: payload.question.title,
        body: payload.question.body,
        id: payload.question.id
      })
    });
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
    this.props.updateQuestion(Object.assign({}, this.state)).then((question) => {
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
            <label>Title:
              <input type="text" onChange={this.onInputChange.bind(this)("title")} value={this.state.title}></input>
            </label>
            <label>Body:
              <textarea className="bodyTextArea" onChange={this.onInputChange.bind(this)("body")}
                value={this.state.body}
              ></textarea>
            </label>
            <input type="submit" value="Update Your Question"/>
            <label>{this.state.errorMessage}</label>
          </form>
        </div>
      </div>
    );
  }
}

export default EditQuestionForm;