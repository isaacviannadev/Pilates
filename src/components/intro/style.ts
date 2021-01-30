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

  .content-img img {
    width: 100%;
    max-width: 1000px;
  }
`;
