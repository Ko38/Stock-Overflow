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
          <a href="/" className="reset-links"> <div>STOCK OVERFLOW</div></a>
          <a href="/" className="reset-links"><div>PRODUCTS</div></a>
          <a href="/" className="reset-links"><div>COMPANY</div></a>
         
          
          
        </div>
      </div>
    );
  }
}