import React from "react";
import './index.css';

function Footer() {
  return (
    <div className="footer">
      <div className="py-5 bg-dark fixed-bottom">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Your Website 2020
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;