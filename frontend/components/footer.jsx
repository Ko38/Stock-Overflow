import React from "react";

export default class Footer extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="footer">
        <img src="/assets/logo.png" alt="" className="logo"/>
        <div className="site-footer">
          <div className="footer-box">STOCK OVERFLOW</div>
          <div className="footer-box">PRODUCTS</div>
          <div className="footer-box">COMPANY</div>
        </div>
      </div>
    );
  }
}