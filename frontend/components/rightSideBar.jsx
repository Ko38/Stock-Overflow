import React from "react";
import { Link } from "react-router-dom";

class RightSideBar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="outer">
        <div className="content">
          <ul className="content_ul">
            <li className="group">Blog</li>
            <ul className="content_ul">
              <li className="blue_links">
                Looking to understand which API is best for a certain task? A new study uses…
              </li>
              <li className="blue_links">
                Ben Popper is the Worst Coder In The World: Quantum Edition
              </li>
            </ul>
            <li className="group">Featured on Meta</li>
            <ul className="content_ul">
              <li className="blue_links">
                Feedback post: Moderator review and reinstatement processes
              </li>
              <li className="blue_links">
                Post for clarifications on the updated pronouns FAQ</li>
              <li className="blue_links">New Post Notices (Closed/On Hold/etc.) rolling out on Stack Overflow</li>
              <li className="blue_links">What happens to an account after you die</li>
            </ul>
          </ul>
        </div>
      </div>
    );
  }
}

export default RightSideBar;