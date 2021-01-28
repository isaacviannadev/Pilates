import React from "react";
import { Container } from "./style";
import Typist from "react-typist";

import PilatesImg from "../../assets/pilates.svg";

const Intro: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <div className="content-info">
          <h1>
            Quer deixar seu dia
            <Typist>
              <strong>perfeito</strong>?
              <Typist.Backspace count={9} delay={200} />
              <strong>leve</strong>?
              <Typist.Backspace count={5} delay={200} />
              <strong>gostoso</strong>?
              <Typist.Backspace count={8} delay={200} />
              <strong>melhor</strong>?
            </Typist>
          </h1>

          <span>Venha conhecer nosso espaço!</span>
          <div className="button">
            <button type="button">Conhecer</button>
          </div>
        </div>

        <div className="content-img">
          <img src={PilatesImg} alt="Pilates" />
        </div>
      </div>
    </Container>
  );
};

export default Intro;
