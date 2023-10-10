import React from "react";

export const Types = () => {
  return (
    <div className="types">
      <div className="container">
        <div className="row">
          <div className="main-content">
            <p className="h">Os três tipos de RAM</p>
            <p className="paragraph">E algumas de suas características</p>
          </div>
        </div>
        <div className="div">
          <div className="div-wrapper">
            <div className="card-item">
              <div className="flex-row">
                <div className="div-wrapper">
                  <div className="text-wrapper">DRAM</div>
                </div>
              </div>
              <div className="card-content">
                <p className="h-2">Memória de acesso aleatório dinâmico.</p>
                <p className="h-3">
                  Armazena dados em células de capacitor e transistor.
                </p>
                <p className="h-3">
                  Requer atualização constante (refresh) para manter os dados.
                </p>
                <p className="h-3">
                  Maior capacidade e mais lenta em comparação com SRAM.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card-item">
              <div className="flex-row">
                <div className="div-wrapper">
                  <div className="text-wrapper">SRAM</div>
                </div>
              </div>
              <div className="card-content">
                <p className="h-2">Memória de acesso aleatório estático.</p>
                <div className="h-3">Armazena dados em flip-flops.</div>
                <div className="h-3">Não requer atualização constante.</div>
                <p className="h-3">
                  Mais rápida e cara em comparação com DRAM.
                </p>
                <p className="h-3">
                  Usada em caches e registradores de alta velocidade.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card-item">
              <div className="flex-row">
                <div className="div-wrapper">
                  <div className="text-wrapper">SDRAM</div>
                </div>
              </div>
              <div className="card-content">
                <div className="h-2">Variação sincronizada da DRAM.</div>
                <p className="h-3">
                  Funciona em sincronia com o relógio do sistema.
                </p>
                <p className="h-3">Mais rápida que a DRAM convencional.</p>
                <p className="h-3">
                  Usada como memória principal em sistemas modernos.
                </p>
                <p className="h-3">
                  Pode ser DDR (Double Data Rate) para transferências mais
                  rápidas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Types;
