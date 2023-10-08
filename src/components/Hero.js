import React from "react";

const Hero = () => {
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
          <div className="card-item-wrapper">
            <div className="card-item">
              <p className="div">
                O que você verá <br />
                neste site?
              </p>
              <div className="summary">
                <div className="li">
                  <div className="link">O que é RAM?</div>
                </div>
                <div className="li">
                  <div className="link">Sua história</div>
                </div>
                <div className="link-wrapper">
                  <div className="link-2">Diferentes tipos de RAM</div>
                </div>
                <div className="link-wrapper">
                  <div className="link-3">Principais características</div>
                </div>
                <div className="li">
                  <div className="link">Preços e modelos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
