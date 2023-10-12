import React from "react";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";

export const Models = () => {
  return (
    <div className="models">
      <div className="container">
        <div className="row">
          <div className="main-content">
            <div className="h">Sobre modelos</div>
            <p className="paragraph">
              aqui estão alguns modelos disponíveis para venda online na Amazon
            </p>
          </div>
        </div>
        <div className="frame">
          <div className="overlap-group">
            <a
              href="https://www.amazon.com.br/KF432C16BB1A-16-Mem%C3%B3ria-3200Mhz-desktop/dp/B097HQ9ML1/ref=sr_1_1?adgrpid=129701038471&hvadid=615781018977&hvdev=c&hvlocphy=9102217&hvnetw=g&hvqmt=e&hvrand=17550493720633626301&hvtargid=kwd-364875314396&hydadcr=7380_13277793&keywords=amazon+memoria+ram&qid=1697143145&sr=8-1&ufe=app_do%3Aamzn1.fos.fcd6d665-32ba-4479-9f21-b774e276a678"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="imgamazon"
                alt="produto a venda amazon"
                src={img1}
              />
            </a>
            <a
              href="https://www.amazon.com.br/Mem%C3%B3ria-DDR3-1-333MHz-Kingston-KVR1333D3N9/dp/B0069RXHF8/ref=sr_1_9?adgrpid=129701038471&hvadid=615781018977&hvdev=c&hvlocphy=9102217&hvnetw=g&hvqmt=e&hvrand=17550493720633626301&hvtargid=kwd-364875314396&hydadcr=7380_13277793&keywords=amazon+memoria+ram&qid=1697143145&sr=8-9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="imgamazon"
                alt="produto a venda amazon"
                src={img2}
              />
            </a>
            <a
              href="https://www.amazon.com.br/mem%C3%B3rias-HyperX-Predator-4266Mhz-desktop/dp/B08CXXXQJJ/ref=sr_1_2?adgrpid=129701038471&hvadid=615781018977&hvdev=c&hvlocphy=9102217&hvnetw=g&hvqmt=e&hvrand=17550493720633626301&hvtargid=kwd-364875314396&hydadcr=7380_13277793&keywords=amazon+memoria+ram&qid=1697141922&refinements=p_36%3A17270759011&rnid=16254006011&s=computers&sr=1-2&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="imgamazon"
                alt="produto a venda amazon"
                src={img3}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Models;
