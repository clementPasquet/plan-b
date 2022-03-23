import PaidRounded from "@mui/icons-material/PaidRounded";
import React from "react";
import styled from "styled-components";

export default function LendingCards() {

  //! pass Props 

  
  return (
    <LendingCard>
      <div className="header">
        <div className="l">
          <PaidRounded />
          <div className="asset">USDC</div>
        </div>
        <div className="r">
          <div className="rewards">9.80%</div>
        </div>
      </div>
      <div className="main">
        <div className="l">
          <p className="bold">Lock-up</p>
          <p className="light">24 hours</p>
          <p className="bold">Minimum Deposit</p>
          <p className="light">50 USDC</p>
        </div>
        <div className="r">
          <div className="deposit-btn">Deposit</div>
          <div className="invest-btn">Invest</div>
        </div>
      </div>
    </LendingCard>
  );
}

const LendingCard = styled.div`
  background: #1c1c1c;
  width: 300px;
  background-color: rgba(8, 8, 8, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid white;
  border-radius: 16px;
  padding: 25px;
  position: relative;
  .main {
    display: flex;
    position: relative;
    .l {
      margin-top: 2px;
      padding-top: 10px;
      .light {
        font-weight: 200;
        font-size: 1rem;
      }
      .bold {
        font-weight: 600;
        font-size: 1.05rem;
        margin-bottom: -7.5px;
      }
    }
    .r {
      position: absolute;
      top: 50%;
      right: 0;
      .deposit-btn,
      .invest-btn {
        cursor: pointer;
        font-weight: 600;
        border-radius: 5px;
        border: 1px solid white;
        padding: 5px;
        width: 65px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .deposit-btn {
        position: absolute;
        top: -45px;
        right: 10px;
      }
      .invest-btn {
        margin-top: 15px;
        margin-right: 10px;
        cursor: pointer;
      }
    }
  }
  &:hover {
    border: 1px solid grey;
  }

  .header {
    display: flex;
    width: 140%;
    border: 1px solid transparent;
    border-radius: 5px;
    background-color: white;
    height: 50px;
    margin-top: -20%;
    margin-left: -20%;
    position: relative;
    color: black;
    font-weight: 600;
    &:hover {
      border: 1px solid white;
    }
    .l,
    .r {
      display: flex;
      position: absolute;
    }
    .l {
      left: 0;
      padding-left: 15px;
      padding-top: 13px;
      .asset {
        font-size: 1.1rem;
        padding-top: 1.5px;
        padding-left: 10px;
      }
    }
    .r {
      right: 0;
      padding-top: 15px;
      padding-right: 20px;
      padding-left: 28px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      background: linear-gradient(101.05deg, #1e3d8d -5.36%, #4169e1 29.46%, #4682b4 56.03%, #6f98e5 81.92%);
      height: 35px;
      color: white;
      font-size: 1.1rem;
    }
  }
`;
