import React from "react";

export const Video = () => {
  return (
    <div className="video">
      <div className="container">
        <div className="row">
          <div className="main-content">
            <p className="h">
              Que tal um video
              <br />
              um pouco mais explicativo sobre?
            </p>
            <p className="paragraph">
              Trouxemos este vídeo do canal xxxxxxx que comenta muito bem sobre
              o assunto
              <br />e vai agregar muito no seu conhecimento!
            </p>
          </div>
        </div>
        <div className="card-item-wrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/nO6QmjdyyD0?si=dxjQelOjmsgrW5AX"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
