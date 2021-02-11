import React from "react";

import { FiCoffee, FiShoppingCart, FiChevronDown } from "react-icons/fi";
import { IoIosFitness } from "react-icons/io";

import { Container } from "./style";

import LogoImg from "../../assets/logoCleo.png";
import UserImg from "../../assets/isaac.jpg";

const Menu: React.FC = () => {
  return (
    <Container>
      <div className="navbar">
        <div className="menu-logo">
          <img src={LogoImg} alt="Studio Cleo Fernandes" />
        </div>
        <div className="nav-options">
          <div className="menu-options">
            <a className="btn" href="#">
              <IoIosFitness />
              Pilates
            </a>
            <a className="btn" href="#">
              <FiCoffee />
              Café
            </a>
          </div>

          <div className="menu-login">
            <a href="/">
              <FiShoppingCart />
            </a>
            <div className="login">
              <div className="login-img">
                <img src={UserImg} alt="User" />
              </div>
              <div className="login-info">
                <span>Olá,</span>
                <div className="login-options">
                  <strong>Isaac</strong>
                  <FiChevronDown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Menu;
