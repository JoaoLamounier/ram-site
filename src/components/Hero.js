import React from "react";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-md">
            <p className="h">
              Conheça o<br />
              mundo das <br />
              Memorias RAM
            </p>
            <p className="text-wrapper">
              O coração da velocidade computacional.
              <br />
              Entenda a evolução e função da RAM no mundo digital
            </p>
          </div>
          <div className="card-item">
            <p className="div">
              O que você verá <br />
              neste site?
            </p>
            <div className="summary">
              <div className="li">O que é RAM?</div>
              <div className="li-2">Sua história</div>
              <div className="li-2">Diferentes tipos de RAM</div>
              <div className="li-2">Principais características</div>
              <div className="li-2">Videos explicativos sobre</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
