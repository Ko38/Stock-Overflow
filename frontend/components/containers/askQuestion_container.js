import {connect} from "react-redux";
import AskQuestionForm from "../askQuestionForm";
import { askQuestion} from "../../actions/question_actions";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return{
    askQuestion: (question) => { 
      return dispatch(askQuestion(question));
    }
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(AskQuestionForm);