import React from "react";
import { Link } from "react-router-dom";

export default class Footer extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="footer">
        <Link to="/">
          <img src="/assets/logo.png" alt="" className="logo" />
        </Link>
        
        <div className="site-footer">
          {/* <a href="/" className="reset-links"> <div>STOCK OVERFLOW</div></a>
          <a href="/" className="reset-links"><div>PRODUCTS</div></a>
          <a href="/" className="reset-links"><div>COMPANY</div></a> */}
          <div className="footer-person phillip">
            <h1 className="footer-name">By Phillip Ko</h1>
            <div className="footer-icons">
              <a href="https://github.com/Ko38"> <img className="github-logo" src="/assets/github-white.png"></img></a>
              <a href="https://www.linkedin.com/in/phillip-ko-a14818183/"> <img className="github-logo" src="/assets/linkedin-white.png"></img></a>
            </div>
          </div>
          
          
        </div>
      </div>
    );
  }
}