import React from "react";
import { Link } from "react-router-dom";

class SideBar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="sidenav">
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default SideBar;