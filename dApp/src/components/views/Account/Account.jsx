import React from "react";
import styled from "styled-components";
import Cards from "../../Cards/Cards";
import Chart from "./Chart";
// import USDCLogo from "../assets/USDC.png"
// import DAILogo from "../assets/DAI.png"
// import USDTLogo from "../assets/USDT.png"

export default function Account() {
  return (
    <>
      <AccountPage>
        <p>My Wallet</p>
        <div className="cards-wrapper">
          {/* <Chart /> */}
          <Cards title="USDC" text="$ 58,589.94" />
          <Cards title="DAI" text="$ 58,589.94" />
          <Cards title="MIM" text="$ 58,589.94" />
          <Cards title="AVAX" text="$ 58,589.94" />
          <Cards title="USDT" text="$ 58,589.94" />
        </div>

        <p>My Contracts</p>
      </AccountPage>
      <div>Account</div>
    </>
  );
}

const AccountPage = styled.div`
  /* display: flex; */
  .cards-wrapper {
    display: flex;
    justify-content: space-around;
    padding: 15px;
    margin-top: 35px;
    width: 80%;
    .pie-wrapper {
      width: 75px;
    }
  }
`;
