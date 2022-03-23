import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "./assets/logo.png";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';

// import TwitterIcon from '@mui/icons-material/Twitter';
// import TelegramIcon from '@mui/icons-material/Telegram';

export default function Sidebar() {
  return (
    <>
      <SidebarWrapper>
        <img src={Logo} alt="logo" className="logo-wrapper" />
        <div className="nav-elements">
            <div className="nav">
          <NavLink exact to="/" activeClassName="active-link" className="link">
            <HomeRoundedIcon fontSize="large" className="icon"/>Home
          </NavLink>
          </div>
          <div className="nav">
          <NavLink
            exact
            to="/staking"
            activeClassName="active-link"
            className="link"
          >
            <AccountTreeRoundedIcon fontSize="large" className="icon" />Staking
          </NavLink>
          </div>
          <div className="nav">
          <NavLink
            exact
            to="/lending"
            activeClassName="active-link"
            className="link"
          >
           <PaidRoundedIcon fontSize="large" className="icon"/> Lending
          </NavLink>
          </div>
          <div className="nav">
          <NavLink
            exact
            to="/account"
            activeClassName="active-link"
            className="link"
          >
              <AccountCircleRoundedIcon fontSize="large" className="icon"/>
            Account
          </NavLink>
          </div>
          <div className="nav">
          <NavLink
            exact
            to="/docs"
            activeClassName="active-link"
            className="link"
          >
           <ArticleRoundedIcon fontSize="large" className="icon"/> Docs
          </NavLink>
          </div>
          <div className="nav">
          <NavLink
            exact
            to="/chart"
            activeClassName="active-link"
            className="link"
          >
           <BarChartRoundedIcon fontSize="large" className="icon"/> Chart
          </NavLink>
          </div>
          
        </div>
      </SidebarWrapper>
    </>
  );
}

const SidebarWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(40, 44, 52, 0.075);
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  height: 100vh;
  padding: 15px;
  width: 225px;

  .logo-wrapper {
    width: 100px;
    margin: 0 auto;
    margin-top: 50px;
    margin-left: 50px;
    border-radius: 5px;
    margin-bottom: 50px;
    &:hover {
      cursor: pointer;
    }
  }
  .nav-elements {
    width: 80%;
    margin: 15px auto;
    height: 60%;
    position: relative;
    .nav {
        position: relative;
    }
    .icon {
        position: absolute;
        transform: scale(.9);
        left: 10px;
        top: 7px;
    }
    .link {
      display: block;
      border-radius: 16px;
      padding: 15px 15px;
      text-align: center;
      margin-bottom: 75px;
      background: transparent;
      &:hover {
          background: #62627b;
      }
    }
    .active-link {
      background: linear-gradient(
        101.05deg,
        #1e3d8d -5.36%,
        #1e3d8d 29.46%,
        #6F98E5 56.03%,
        #6F98E5 81.92%
      );
    }
  }
`;
