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
              <a
                href="https://github.com/JoaoLamounier"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="link" alt="icone git hub" src={giticon} />
              </a>
              <a
                href="https://www.linkedin.com/in/joao-paulo-lamounier/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="link" alt="icone linkedin" src={linkedinicon} />
              </a>
            </div>
          </div>
          <div className="text-wrapper">Referencias</div>
          <div className="referencias">
            <div className="bloco-referencias">
              <p>
                https://edisciplinas.usp.br/pluginfile.php/3248618/mod_resource/content/1/Aula%204-HistoriaDoArmazenamento.pdf
              </p>
              <p>https://www.adrenaline.com.br/hardware/o-que-e-memoria-ram/</p>
            </div>
            <div className="bloco-referencias">
              <p>aaaaaaaaaaaaaaaaaaa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
