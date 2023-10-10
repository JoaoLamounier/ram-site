import React from "react";
import Ram from "./vectors/navegator.svg";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <img className="navegator" alt="Navegator" src={Ram} />
        <div className="collapse-navbar">
          <div className="navbar-nav">
            <div className="li">
              <div className="link">Home</div>
            </div>
            <div className="li">
              <div className="link">História</div>
            </div>
            <div className="li">
              <div className="link">Tipos</div>
            </div>
            <div className="li">
              <div className="link">Usabilidade</div>
            </div>
            <div className="li">
              <div className="link">Modelos</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
