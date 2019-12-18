import React from "react";
import {Link} from "react-router-dom";


class HomePage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="homePageContainer">
        <div className="splash">
          <div>
            <br />
            <br />
            <br/>
            <img className="responsive" src="/assets/background.svg" alt=""/>
            <div className="header">
              <h1 className="bigHeader">We &lt;3 people who code</h1>
              <p className="headerMessage">
                We build products that empower developers and connect them to solutions that enable productivity, growth, and discovery.
              </p>
              <Link to="/questions" className="aButton navLinkBtn">
                Question Wall
              </Link>
            </div>
            
            <br/>
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
        <div className="developerBlock"><br /><br /><br /><br />
          <h2 className="developerHeader">For developers, by developers</h2>
          <div className="divider"></div>
          <p className="developerMessage">Stock Overflow is an open community for anyone that codes. We help you get answers to your toughest coding questions, share knowledge with your coworkers in private, and find your next dream job.</p>

        </div>
      </div>
    );
  }
}

export default HomePage;