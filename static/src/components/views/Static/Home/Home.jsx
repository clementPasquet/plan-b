/* eslint-disable prettier/prettier */
import React from "react";
import styled from "styled-components";
import Logo from "../../../assets/logo-blue.png";
import BackgroundIMG from "../../../assets/bg.png";

export default function Home() {
  return (
    <HomePage>
      <div className="home"></div>
    </HomePage>
  );
}

const HomePage = styled.div`
  .home {
    margin: 0;
    padding: 0;
    background: -webkit-gradient(linear, left top, left bottom, from(#1e3d8d), to(#6f98e5));
    background: linear-gradient(180deg, #1e3d8d, #6f98e5);
    height: 100vh;
  }
`;
