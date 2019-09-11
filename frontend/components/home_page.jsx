import React from "react";


class HomePage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="splash">
        <br />
        <br />
        <br/>
        <img className="responsive" src="/assets/background.svg" alt=""/>
        <div className="header">
          <h1 className="bigHeader">We &lt;3 people who code</h1>
          <p className="headerMessage">
            We build products that empower developers and connect them to solutions that enable productivity, growth, and discovery.
          </p>
        </div>
        
        <br/>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default HomePage;