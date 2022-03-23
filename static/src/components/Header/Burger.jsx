/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

export default function Burger() {
  const [toggle, setToggle] = useState(false);

  const toggler = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  return (
    <BurgerMenu>
      {!toggle ? (
        <MenuIcon className="icon" fontSize="large" onClick={toggler} />
      ) : (
        <div className="burger-opened">
          <MenuOpenIcon className="icon" fontSize="large" onClick={toggler} />
          <div className="burger-nav">
            <p>Home</p>
            <p>Staking</p>
            <p>Lending</p>
            <p>Contact</p>
            <AppButton>
              <p className="txt">App</p>
            </AppButton>
          </div>
        </div>
      )}
    </BurgerMenu>
  );
}

const BurgerMenu = styled.div`
  display: none;
  width: 100%;
  @media (max-width: 850px) {
    display: inherit;
  }
  .icon {
    position: absolute;
    color: white;
    margin-top: -20px;
    right: 15px;
  }
  .burger-opened {
    position: absolute !important;
    width: 100vw;
    height: 100vh;
    background: transparent linear-gradient(180deg, #1e3d8d, #6f98e5);
    top: 0;
    margin-top: -15px;
    right: 0;
    .icon {
      position: absolute;
      top: 75px;
      transform: scale(1.1);
    }
    .burger-nav {
      width: 350px;
      margin: 150px auto;
      text-align: center;
      font-weight: 600;
      color: white;
      p {
        &:hover {
          cursor: pointer;
          color: #5299f5;
        }
      }
    }
  }
`;

const AppButton = styled.div`
  cursor: pointer;
  border: 1px solid #5299f5;
  border-radius: 12px;
  background-color: white;
  max-width: 75px;
  min-width: 40px;
  margin: 0 auto;

  &:hover {
    background-color: transparent;
    border: 1px solid white;
    .txt {
      color: white;
    }
  }
  .txt {
    margin: 7px 17px 7px 17px;
    color: #5299f5;
    font-weight: 600;
  }
`;
