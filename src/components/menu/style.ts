import styled from "styled-components";

export const Container = styled.div`
  height: 120px;
  background-color: transparent;
  display: flex;
  align-items: center;
  padding: 0 20px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);

  position: relative;

  .menu-logo img {
    left: 30px;
    position: absolute;
    top: 10px;
    height: 100px;
  }

  div.menu-options {
    display: flex;
    position: absolute;
    right: 260px;

    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;

      border-radius: 8px;

      color: #3c5324;
      font-weight: 600;
      height: 40px;
      width: 120px;
      padding: 15px;

      transition: all 0.3s;

      &:hover {
        color: #83b551;

        svg {
          color: #d96d2d;
        }
      }

      &:focus {
        color: #d96d2d;

        svg {
          color: #75a446;
        }
      }
    }

    a + a {
      margin-left: 8px;
    }
  }

  .menu-login {
    display: flex;
    position: absolute;
    right: 10px;
    width: 100%;
    max-width: 180px;
    align-items: center;
    justify-content: space-between;
    margin: 10px;

    svg {
      display: flex;
    }
  }

  .login {
    display: flex;
    width: 100%;
    max-width: 120px;
    align-items: center;
    justify-content: center;
  }

  .login .login-img img {
    display: flex;

    width: 30px;
    height: 30px;
    border-radius: 8px;
  }
  .login .login-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 6px;

    span {
      font-size: 10px;
      color: #d96d2d;
    }
  }
  .login .login-options {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 16px;

    strong {
      font-size: 14px;
      color: #7aab49;
    }

    svg {
      margin-left: 10px;
      cursor: pointer;
      margin: 5px;
      border-radius: 50%;
      transition: all 0.3s;

      &:hover {
        color: #d96d2d;
        box-shadow: 1px 1px 2px #c9c9c9;
      }
    }
  }
`;
