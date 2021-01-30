import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 180px;
  background-color: #20715c;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;

  .content {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;

    img {
      width: 100%;
      max-width: 320px;
    }

    .followUs {
      align-items: center;
      justify-content: center;
      padding: 0 25px;
      border: 1px solid rgba(165, 201, 129, 0.3);
      border-top: none;
      border-bottom: none;
      border-radius: 6px;

      h2 {
        width: 100%;
        max-width: 400px;
        color: #fff;
      }

      .social {
        display: flex;
        align-items: center;
        justify-content: center;

        margin-top: 15px;

        a {
          display: flex;
          padding: 12px;
          border-radius: 50%;

          margin: 5px;
          border-radius: 50%;
          transition: all 0.3s;

          &:hover {
            color: #d96d2d;
            box-shadow: 1px 1px 2px #242424;
          }
          svg {
            width: 30px;
            height: 30px;
          }
        }

        a + a {
          margin-left: 8px;
        }
      }
    }

    ul {
      list-style: none;
      li {
        display: flex;
        align-items: center;
        color: #fff;

        svg {
          margin-right: 12px;
        }
      }
      li + li {
        margin-top: 12px;
      }
    }
  }
`;

export const FooterSection = styled.div`
  width: 100%;
  height: 26px;
  background-color: #3b3b3b;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 20px;
  }
`;
