/* eslint-disable prettier/prettier */
import React from "react";
import styled from "styled-components";
import BlueLogo from "../assets/logo-blue.png";
import GoldLogo from "../assets/logo-gold.png";
import Burger from "./Burger";


export default function Header() {
  return (
    <div>
      <HeaderWrapper>
        <div className="logo-box">
          <img src={window.innerWidth > 800 ? BlueLogo : GoldLogo} alt="Plan B Logo" className="logo" />
        </div>
        <div className="nav-elem">
            <Burger />
          <ul>
            <li>Home</li>
            <li>Staking</li>
            <li>Lending</li>
            <li>Contact</li>
            <li>
              <AppButton>
                <p className="txt">App</p>
              </AppButton>
            </li>
          </ul>
        </div>
      </HeaderWrapper>
    </div>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  position: absolute;
  height: 120px;
  /* background: linear-gradient(#1C246B, #1E3D8D); */
  top: 0;
  left: 0;
  right: 0;
  padding: 15px;
  .logo-box {
    display: flex;
    align-items: center;
    .logo {
      padding-left: 30px;
      height: 45%;
      cursor: pointer;
    }
  }

  .nav-elem {
    display: flex;
    width: 100%;
    align-items: center;
    position: relative;
    ul {
      width: 75%;
      right: 15px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      list-style: none;
      font-size: 1.25rem;
      margin: 0;
      padding: 0;
      position: absolute;
      color: white;
      font-weight: 500;
      li {
        cursor: pointer;
        &:hover {
          color: #5299f5;
        }
      }
      @media (max-width: 850px) {
          display: none;
      }
    }
  }
`;

const AppButton = styled.div`
  cursor: pointer;
  border: 1px solid #5299f5;
  border-radius: 12px;
  background-color: white;
  &:hover {
    background-color: transparent;
    border: 1px solid white;
    .txt {
      color: white;
    }
  }
  .txt {
    margin: 10px 21px 10px 21px;
    color: #5299f5;
  }
`;
