import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 60px;
  background-color: #e1eadf;

  .content {
    margin: 20px auto;
    border-radius: 20px;
    width: 100%;
    max-width: 1100px;
    height: 600px;
    background-color: rgba(255, 255, 255, 0.6);
    display: flex;

    div.img {
      position: relative;
      top: 80px;
      left: 80px;
      width: 440px;
      height: 440px;
      filter: grayscale(80%);
      transition: all 0.2s;

      .info-img img {
        width: 440px;
        height: 440px;

        border-radius: 20px;
        object-fit: cover;
        z-index: 0;

        box-shadow: 4px 4px 8px gray;
      }

      &:hover {
        filter: grayscale(0%);
        filter: contrast(120%);
        z-index: 9;
      }
    }

    .infos {
      margin: 30px;
      background: linear-gradient(
        to top right,
        rgba(22, 160, 133, 0.4) 0%,
        rgba(250, 234, 169, 0.7) 100%
      );
      backdrop-filter: blur(10px);
      box-shadow: 4px 4px 8px #dddddd;

      border-radius: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      text-align: center;

      h1 {
        margin: 15px;
        text-transform: uppercase;
        font-weight: 700;
      }

      p {
        margin: 0 60px;
        line-height: 28px;
        font-size: 22px;
        letter-spacing: 2px;
      }

      .btn-grad {
        display: block;
        width: 200px;
        padding: 10px;
        background-color: #fff;
        border-radius: 20px;
        border: 2px solid #fff;
        color: white;
        color: inherit;
        transition: all 0.5s;

        &:hover {
          background-color: #20715c;
          color: #fff;
        }
      }
    }
  }
`;
