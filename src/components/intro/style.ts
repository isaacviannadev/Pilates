import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  /* height: 600px; */
  background-color: #fff1ff;

  .container {
    width: 100%;
    max-width: 1100px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .content-info {
    width: 100%;
    max-width: 600px;

    h1{
      width: 100%;
      max-width:420px;
      line-height: 50px;
      font-size:40px;

      strong {
        color: #75a446;
      }

      span {
        font-size: 16px;
        font-weight:normal;
      }
    }
  }

  .content-img img {
    width: 100%;
    max-width: 700px;
  }
`;
