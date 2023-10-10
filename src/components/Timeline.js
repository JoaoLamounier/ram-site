import React from "react";
import Linadotempo from "./images/Timeline.png";
import Comparacao from "./images/download.png";

export const Timeline = () => {
  return (
    <div className="timeline">
      <div className="container">
        <div className="row">
          <div className="main-content">
            <p className="h">Um pouco sobre a historia da RAM</p>
          </div>
        </div>
        <img className="element" alt="Timeline Memoria Ram" src={Linadotempo} />
        <div className="frame">
          <div className="col-md">
            <p className="text-wrapper">
              A evolução da Memória RAM ao longo do tempo resultou em
              dispositivos mais rápidos, eficientes e de maior capacidade, que
              desempenham um papel fundamental nos sistemas de computadores
              modernos.
            </p>
            <p className="div">
              Ao lado uma comparação lado a lado da evolução da tecnologia
            </p>
          </div>
          <img className="download" alt="Download" src={Comparacao} />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
