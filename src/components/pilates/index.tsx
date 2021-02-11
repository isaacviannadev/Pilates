import React from "react";
import Tilt from "react-vanilla-tilt";

import pilatesImg from "../../assets/pilates.jpg";

import { Container } from "./style";

const Pilates: React.FC = () => {
  return (
    <Container id="pilates">
      <div className="content">
        <Tilt
          className="img"
          options={{ scale: 2, glare: true }}
          style={{
            width: "440px",
            padding: "0",
            margin: "0",
            borderRadius: "20px",
          }}
        >
          <div className="info-img">
            <img src={pilatesImg} alt="" />
          </div>
        </Tilt>
        <div className="infos">
          <h1> Conhece os benefícios do Pilates?</h1>
          <p>
            Conheça nossa estrutura, nossos profissionais fisioterapeutas,
            nossos serviços extras e opcionais, e venha fazer uma aula
            experimental grátis!
          </p>
          <button type="button" className="btn-grad">
            Quero Saber Mais!
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Pilates;
