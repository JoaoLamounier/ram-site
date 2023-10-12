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
                <div className="text-wrapper">Grupo 3</div>
                <div className="nomes">
                  <p>
                    {" "}
                    Emanuely Michelon, <br />
                    Gabriela Elias, <br />
                    Gabriel Zampieri
                  </p>
                  <p>
                    {" "}
                    Isabelle Moraes Bastos, <br />
                    João Paulo Lamounier Silva
                  </p>
                </div>
                {/*  <div className="text-wrapper">João Paulo Lamounier Silva</div> */}
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
              <a
                href="https://edisciplinas.usp.br/pluginfile.php/3248618/mod_resource/content/1/Aula%204-HistoriaDoArmazenamento.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>https://edisciplinas.usp.br/</p>
              </a>
              <a
                href="https://www.adrenaline.com.br/hardware/o-que-e-memoria-ram/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>https://www.adrenaline.com.br/</p>
              </a>
            </div>
            <div className="bloco-referencias">
              <a
                href="https://www.oficinadanet.com.br/hardware/24683-o-que-e-e-como-funciona-a-memoria-ram-"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>https://www.oficinadanet.com.br/</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
