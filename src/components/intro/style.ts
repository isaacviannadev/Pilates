import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;

  .container {
    width: 100%;
    max-width: 1100px;
    height: 500px;
    padding: 0 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .content-info {
    width: 100%;
    max-width: 600px;
    z-index: 2;

    h1 {
      width: 100%;
      max-width: 420px;
      line-height: 50px;
      font-size: 40px;
      margin-bottom: 40px;

      strong {
        color: #75a446;
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

  .container .content-img {
    width: 100%;
    max-width: 1000px;
    background-color: rgba(255, 255, 255, 0.9);

    img {
      position: absolute;
      width: 100%;
      max-width: 46em;
      top: 120px;
      right: 0;
      margin-inline: 5%;
      border-radius: 0 0 50% 50%;
      opacity: 0.7;
      border-bottom: 20px solid #fff;

      transition: 1s ease-in-out;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
