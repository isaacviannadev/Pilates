import React from "react";
import Tilt from "react-vanilla-tilt";

import coffee1 from "../../assets/coffee/coffee1.jpg";
import coffee2 from "../../assets/coffee/coffee2.jpg";
import coffee3 from "../../assets/coffee/coffee3.jpg";

import { Container } from "./style";

const Coffee: React.FC = () => {
  return (
    <Container id="coffee">
      <div className="content">
        <div className="infos">
          <h1> Sabia que temos um Café?</h1>
          <p>
            Que funciona no mesmo endereço, serve várias opções de sobremesas,
            sem glúten e saudáveis, além de servir vários tipos de receitas com
            café. Tudo pra tornar sua experiência incrível!
          </p>
          <button type="button" className="btn-grad">
            Quero Saber Mais!
          </button>
        </div>
        <div className="coffeeCards">
          <Tilt 
            style={{
              width: "250px",
              padding: "0",
              margin: "30px",
              borderRadius: "20px",
              marginTop: "0",
            }}
          >
            <div className="card">
              <div className="cardImg">
                <img src={coffee2} alt="" />
              </div>
              <div className="item">
                <h1>01</h1>
                <h2>Café</h2>
                <p>Cafeteria com cafés especiais e premiados!</p>
              </div>
            </div>
          </Tilt>
          <Tilt
            style={{
              width: "250px",
              padding: "0",
              margin: "30px",
              borderRadius: "20px",
              marginTop: "0",
            }}
          >
            <div className="card">
              <div className="cardImg">
                <img src={coffee1} alt="" />
              </div>
              <div className="item">
                <h1>02</h1>
                <h2>Eventos</h2>
                <p>
                  Reserve para reuniões e confraternizações e tenha um espaço e
                  cardápio exclusivos!
                </p>
              </div>
            </div>
          </Tilt>
          <Tilt
            style={{
              width: "250px",
              padding: "0",
              margin: "30px",
              borderRadius: "20px",
              marginTop: "0",
            }}
          >
            <div className="card">
              <div className="cardImg">
                <img src={coffee3} alt="" />
              </div>
              <div className="item">
                <h1>03</h1>
                <h2>Encomendas</h2>
                <p>
                  Encomente para levar pra sua casa, nossas delícias, nossa
                  mercearia é cheia de itens maravilhosos!
                </p>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </Container>
  );
};

export default Coffee;
