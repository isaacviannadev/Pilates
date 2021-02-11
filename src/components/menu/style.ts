import styled from "styled-components";

export const Container = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  backdrop-filter: blur(5px);
  position: relative;

  .navbar {
    margin: 8px;
    padding: 0 20px;

    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-options {
    width: 100%;

    height: 100%;
    max-width: 500px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .menu-logo {
    height: 100px;
    width: 360px;
    display: flex;
    padding: 8px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  div.menu-options {
    display: flex;
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

      transition: 0.7s ease;
      position: relative;

      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 77px;
        left: 0;
        opacity: 0;
        width: 0px;
        height: 3px;
        border-radius: 8px;
        background-color: #d96d2d;
        transition: 0.7s ease;
        z-index: 999;
      }

      &:hover {
        color: #83b551;

        &::after {
          width: 122px;
          opacity: 1;
        }

        svg {
          color: #d96d2d;
        }
      }

      &:focus {
        color: #d96d2d;
        &::after {
          width: 122px;
          opacity: 1;
        }

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
        box-shadow: 1px 1px 3px #c9c9c9;
      }
    }
  }
`;
