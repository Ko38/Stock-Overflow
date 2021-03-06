import React from "react";
import { Link } from "react-router-dom";

class SideBar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="sidenav robotoFont">
        <Link className="sideNavLinkText" to="/">Home</Link> <br/>
        <div className="publicText">PUBLIC</div>


        <Link className="sideNavLinkText questionsLink" to="/questions">
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18"><path d="M9 1a8 8 0 1 0 0 16A8 8 0 0 0 9 1zM8 15.32a6.4 6.4 0 0 1-5.23-7.75L7 11.68v.8c0 .88.12 1.32 1 1.32v1.52zm5.72-2c-.2-.66-1-1.32-1.72-1.32h-1v-2c0-.44-.56-1-1-1H6V7h1c.44 0 1-.56 1-1V5h2c.88 0 1.4-.72 1.4-1.6v-.33a6.4 6.4 0 0 1 2.32 10.24v.01z"></path></svg>
          &nbsp; Stock Overflow
        </Link>

        
      </div>
    );
  }
}

export default SideBar;