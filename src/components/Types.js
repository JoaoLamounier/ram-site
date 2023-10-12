import React from "react";
import memory from "./vectors/memory_FILL0_wght400_GRAD0_opsz24.svg";
import clock from "./vectors/update_FILL0_wght400_GRAD0_opsz24.svg";
import arrows from "./vectors/arrows_outward_FILL0_wght400_GRAD0_opsz24.svg";

export const Types = () => {
  return (
    <div className="types">
      <div className="container">
        <div className="row">
          <div className="main-content">
            <p className="h">Os três tipos de RAM</p>
            <p className="paragraph">
              E algumas de suas características específicas
            </p>
          </div>
        </div>
        <div className="div">
          <div className="col-md">
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
        <div className="row">
          <p className="h">As principais características</p>
          <div className="blocoesplicacao">
            <p className="h">Capacidade</p>
            <div className="esplicacao">
              <p>
                {" "}
                A quantidade disponível de memória RAM nos computadores está
                diretamente ligada à capacidade de acesso a mais arquivos de
                maneira instantânea em tempo real. Por isso, é importante
                considerar quantos GB, em geral, são necessários para
                desenvolver as aplicações que você deseja desempenhar.
                Atualmente, 16 GB de memória deve ser o suficiente para executar
                boa parte dos games de nova geração, além de aplicações
                profissionais.
              </p>
              <img className="img" src={memory} />
            </div>
            <p className="h">Frequência / clock</p>
            <div className="esplicacao">
              <img className="img" src={clock} />
              <p>
                {" "}
                Assim como os processadores, as memórias também trabalham em
                ciclos que são medidos em MHz. Os ciclos são um conjunto de
                instruções realizadas por segundo. Dessa forma, quanto mais
                instruções por segundo, maior a velocidade de atuação das
                memórias. Em geral, quanto mais, melhor, mas isso também
                significa que as memórias provavelmente esquentarão mais. Outro
                ponto importante é evitar colocar módulos diferentes e que atuem
                em frequências diferentes. Isso porque o sistema irá nivelar o
                desempenho por baixo, o que fará o computador desperdiçar
                capacidade.
              </p>
            </div>
            <p className="h">DDR</p>
            <div className="esplicacao">
              <p>
                {" "}
                DDR quer dizer “double data rate” ou taxa de transferência
                dupla, em tradução livre. Isso diz respeito à quantidade de
                dados que a memória é capaz de trocar. Existem diferentes
                gerações de DDR, sendo a mais recente a DDR5, capaz de taxas de
                4.8 GT/s a 8.4 GT/s. As mais populares, no entanto, são as DDR3
                e DDR4, com capacidades inferiores. <br /> <br /> Lembrando que
                as placas-mãe precisam ser compatíveis com o padrão das
                memórias, sejam elas DDR3, DDR4 ou DDR5. Isso pode ser visto no
                manual ou site oficial da mainboard.
              </p>
              <img className="img" src={arrows} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Types;
