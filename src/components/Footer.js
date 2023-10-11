import React from "react";
import giticon from "./vectors/mdi_github.svg";
import linkedinicon from "./vectors/mdi_linkedin.svg";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="div">
        <div className="container">
          <div className="row">
            <div className="col-md">
              <div className="navbar-brand">
                <div className="text-wrapper">João Paulo Lamounier Silva</div>
              </div>
            </div>
            <div className="link-wrapper">
              <a href="https://github.com/JoaoLamounier">
                <img className="link" alt="Col md" src={giticon} />
              </a>
              <a href="https://www.linkedin.com/in/joao-paulo-lamounier/">
                <img className="link" alt="Hr" src={linkedinicon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
