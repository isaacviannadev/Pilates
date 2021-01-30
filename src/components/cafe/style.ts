import styled from "styled-components";

import beanCoffee from "../../assets/coffee/beans.png";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 60px;
  background: url(${beanCoffee}) no-repeat left;
  padding: 30px 0;

  .content {
    width: 100%;
    max-width: 1100px;
    height: 600px;
    border-radius: 20px;

    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);

    .infos {
      margin: 30px;
      background: #eef3ed;

      box-shadow: 4px 4px 6px #c0c0c0;

      border-radius: 20px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      text-align: center;

      h1 {
        margin: 20px;
        text-transform: uppercase;
        font-weight: 700;
        padding: 22px 5px;
        width: 100%;
        height: 100px;
      }

      p {
        margin: 0 20px;
        line-height: 28px;
        font-size: 12px;
        letter-spacing: 2px;
        text-align: justify;
      }

      .btn-grad {
        display: block;
        width: 50%;
        padding: 10px;
        background-color: #fff;
        border-radius: 20px;
        border: 2px solid #fff;
        color: white;
        color: inherit;
        transition: all 0.5s;
        margin-right: 20px;

        &:hover {
          background-color: #683c3c;
          color: #fff;
        }
      }
    }

    .coffeeCards {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-top: 0;

      .card {
        display: flex;
        align-items: center;
        /* background-color: rgba(255, 255, 255, 0.8); */
        background-color: #153e35;
        width: 250px;
        height: 380px;
        border-radius: 20px;
      }

      .cardImg {
        display: flex;
        position: absolute;
        width: 250px;
        height: 380px;

        img {
          width: 250px;
          height: 380px;
          border-radius: 20px;
        }
      }

      .card .item {
        padding: 20px;
        text-align: center;
        transform: translateY(100px);
        opacity: 0;
        transition: 0.5s;
      }

      .card:hover .cardImg {
        opacity: 0.2;
      }
      .card:hover .item {
        transform: translateY(0px);
        opacity: 1;
      }

      .card .item h1 {
        position: absolute;
        top: -80px;
        right: 20px;
        font-size: 8em;
        pointer-events: none;
        color: #ffffff2d;
      }

      .card .item h2 {
        font-size: 1.7em;
        text-transform: uppercase;
        font-weight: 700;
        color: #fff;
        z-index: 1;
      }

      .card .item p {
        margin-top: 8px;
        font-size: 1em;
        color: #fff;
        font-weight: 300;
      }
    }
  }
`;
