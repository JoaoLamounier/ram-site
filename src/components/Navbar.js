import React from "react";
import Ram from "./vectors/navegator.svg";
/*import { Link, animateScroll as scroll } from "react-scroll";*/

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <img className="navegator" alt="Navegator" src={Ram} />
        <div className="collapse-navbar">
          <div className="navbar-nav">
            <div className="li">
              <a className="link " href=".hero">
                Home
              </a>
            </div>
            <div className="li">
              <a className="link" href=".timeline">
                História
              </a>
            </div>
            <div className="li">
              <a className="link" href=".types">
                Tipos
              </a>
            </div>
            <div className="li">
              <a className="link" href=".video">
                Usabilidade
              </a>
            </div>
            <div className="li">
              <a className="link" href=".models">
                Modelos
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
