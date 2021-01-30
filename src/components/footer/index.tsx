import React from "react";

import {
  FiUsers,
  FiGift,
  FiMessageCircle,
  FiFacebook,
  FiInstagram,
} from "react-icons/fi";

import { Container, FooterSection } from "./style";

import LogoDevImg from "../../assets/logop.svg";
import logoImg from "../../assets/logoCleo.png";

const Footer: React.FC = () => {
  return (
    <>
      <Container>
        <div className="content">
          <img src={logoImg} alt="Studio Cleo" />
          <div className="followUs">
            <h2>Acompanhe o que a gente faz!</h2>
            <div className="social">
              <a href="$">
                <FiFacebook />
              </a>
              <a href="#">
                <FiInstagram />
              </a>
            </div>
          </div>

          <ul>
            <li>
              <FiMessageCircle />
              Contato
            </li>
            <li>
              <FiUsers />
              Trabalhe Conosco
            </li>
            <li>
              <FiGift />
              Nos Apoie
            </li>
          </ul>
        </div>
      </Container>
      <FooterSection>
        <img src={LogoDevImg} alt="DIV" />
      </FooterSection>
    </>
  );
};
export default Footer;
