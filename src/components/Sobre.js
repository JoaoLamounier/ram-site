import React from "react";
import Sapo from "./images/Frog.png";

export const Sobre = () => {
  return (
    <div className="sobre">
      <div className="container">
        <div className="row">
          <div className="main-content">
            <p className="h">Mas afinal, RAM não era o animal?</p>
            <p className="text-wrapper">
              Também! mas não é desta RAM que estamos falando, na verdade
              estamos falando da Memória de Acesso Aleatório (RAM) que é uma
              parte essencial do computador, armazenando dados temporariamente
              para acesso rápido. Ela desempenha um papel crucial no desempenho
              do computador, determinando a velocidade e eficiência com que as
              tarefas são executadas.
            </p>
          </div>
          <img className="clipart" alt="Frog" src={Sapo} />
        </div>
      </div>
    </div>
  );
};

export default Sobre;
