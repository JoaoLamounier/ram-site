import React from "react";
import Ram from "./vectors/navegator.svg";
import { Link, animateScroll as scroll } from "react-scroll";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <img className="navegator" alt="Navegator" src={Ram} />
        <div className="collapse-navbar">
          <div className="navbar-nav">
            <div className="li">
              <Link
                className="link"
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </div>
            <div className="li">
              <Link
                className="link"
                activeClass="active"
                to="timeline"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                História
              </Link>
            </div>
            <div className="li">
              <Link
                className="link"
                activeClass="active"
                to="types"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Tipos
              </Link>
            </div>
            <div className="li">
              <Link
                className="link"
                activeClass="active"
                to="video"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Usabilidade
              </Link>
            </div>
            <div className="li">
              <Link
                className="link"
                activeClass="active"
                to="models"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Modelos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
