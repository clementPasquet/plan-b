import React from "react";
import styled from "styled-components";
import Cards from "../Cards/Cards";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import InventoryIcon from '@mui/icons-material/Inventory';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarHalfIcon from '@mui/icons-material/StarHalf';

export default function Dashboard() {
  const valsL1 = [
    ["Token Price", "$ 2.05", <AddBusinessIcon />],
    ["Market Cap", "$ 2,050,541.24", <LocalOfferIcon />],
    ["Total Vaults", "548", <InventoryIcon />],
    ["Total Value Locked", "$ 19,054,987.56", <CurrencyExchangeIcon />],
  ];
  const valsL2 = [
    ["Your Contracts", "3", <AccountBalanceWalletIcon />],
    ["Your Balance", "$ 84,562.24", <PriceChangeIcon />],
    ["Daily Rewards", "$ 4,562.24", <EmojiEventsIcon />],
    ["Pending Rewards", "$ 4,562.24",  <StarHalfIcon />],
  ];

  return (
    <DashboardPage>
      <p>Dashboard</p>
      <div className="line">
        {valsL1.map((val, i) => {
          return <Cards title={val[0]} text={val[1]} icon={val[2]} key={i} />;
        })}
      </div>
      <p className="stats">Your Stats</p>
      <div className="line">
      {valsL2.map((val, i) => {
          return <Cards title={val[0]} text={val[1]} icon={val[2]} key={i} />;
        })}
      </div>
    </DashboardPage>
  );
}

const DashboardPage = styled.div`
  .line{
    margin-top: 35px;
    width: 80%;
    display: flex;
    justify-content: space-around;
    padding: 15px;
  }
  .stats {
      margin-top: 30px;
  }
`;
