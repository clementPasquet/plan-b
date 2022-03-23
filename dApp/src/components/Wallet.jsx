import React from "react";
import styled from "styled-components";

export default function Wallet() {
  return (
    <WalletContainer>
      <div className="buy">CTA</div>
      <div className="connect-wallet">Connect Wallet</div>
    </WalletContainer>
  );
}

const WalletContainer = styled.div`
  position: absolute;
  width: 400px;
  display: flex;
  justify-content: space-around;
  top: 25px;
  right: 25px;
  .buy,
  .connect-wallet {
    height: 22px;
    border-radius: 12px;
    padding: 15px 30px;
    background-color: #17171d;
    &:hover {
      background-color: #62627b;;
      cursor: pointer;
    }
  }
  .connect-wallet {
    background: linear-gradient(101.05deg, #1e3d8d -5.36%, #1e3d8d 29.46%, #6f98e5 56.03%, #6f98e5 81.92%);
    &:hover {
      background: linear-gradient(101.05deg, #6f98e5 -5.36%, #6f98e5 29.46%, #1e3d8d 56.03%, #1e3d8d 81.92%);
    }
  }
`;
