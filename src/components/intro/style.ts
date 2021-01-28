import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 60px;
 

  .container {
    width: 100%;
    max-width: 1100px;
    height: 600px;
    padding: 0 80px;
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

      strong {
        color: #75a446;
      }
    }

    span {
      font-size: 16px;
    }

    button {
      margin-top:40px;
      padding: 10px;
      border: none;
      border-radius: 20px;
      width:200px;
      background-color: #75a446;
      color: #fff;
    }
  }

  .content-img img {
    width: 100%;
    max-width: 1000px;
  }
`;
