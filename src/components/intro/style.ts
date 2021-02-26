import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 700px;
  margin-bottom: 20px;

  .container {
    width: 100%;
    max-width: 1100px;
    height: 100%;
    padding: 0 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .content-info {
    width: 100%;
    max-width: 600px;

    h1 {
      width: 100%;
      max-width: 420px;
      line-height: 50px;
      font-size: 40px;
      margin-bottom: 40px;

      div {
        color: #75a446;

        .typist {
          font-size: 40px;
        }
      }
    }

    span {
      font-size: 16px;
    }

    .btn-grad {
      background-image: linear-gradient(
        to right,
        #16a085 0%,
        #faeaa9 51%,
        #16a085 100%
      );
      margin-top: 40px;
      border: none;
      width: 200px;
      padding: 10px;
      transition: 0.5s;
      background-size: 200% auto;
      color: white;
      border-radius: 20px;
      display: block;

      &:hover {
        background-position: right center; /* change the direction of the change here */
      }
    }
  }

  .content-img {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .img-intro {
    width: 100%;
    height: 100%;

    display: inline-block;
    align-items: center;
    justify-content: center;
    position: relative;

    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 140px;
      height: 140px;
      top: 200px;
      left: 0;
      border-radius: 50%;
      box-shadow: 2px 5px 6px rgba(217, 109, 45, 0.7);

      background: radial-gradient(
        61.19% 61.19% at 31.39% 27.74%,
        #fbad7e 0%,
        #d96d2d 69.27%
      );
    }
    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 200px;
      height: 200px;
      top: 25px;
      left: -50px;
      border-radius: 50%;
      box-shadow: 2px 4px 8px rgba(117, 164, 70, 0.2);

      background: radial-gradient(
        61.19% 61.19% at 31.39% 27.74%,
        #adde22 0%,
        #3a9919 97.61%
      );
    }

    img {
      margin: 20px auto;
      overflow: none;
      display: block;
      width: 110%;
      max-width: 700px;
    }
  }
`;
