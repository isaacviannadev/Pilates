import React from "react";
import { Container } from "./style";
import Typist from "react-text-typist";

import PilatesImg from "../../assets/pilates-sobre.png";

const Intro: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <div className="content-info">
          <h1>
            Quer deixar seu dia
            <div>
              <Typist
                className="typist"
                sentences={["melhor?", "mais leve?", "gostoso?", "perfeito?"]}
                loop={true}
                cursorSmooth={true}
                cursorColor="#d96d2d"
                pauseTime={2000}
              />
            </div>
          </h1>

          <span>Venha conhecer nosso espaço!</span>
          <div className="button">
            <button type="button" className="btn-grad">
              Conhecer
            </button>
          </div>
        </div>

        <div className="content-img">
          <div className="img-intro">
            <img src={PilatesImg} alt="Pilates" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Intro;
