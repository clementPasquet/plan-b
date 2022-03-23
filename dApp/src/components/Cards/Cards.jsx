import React from "react";
import styled from "styled-components";
import PaidIcon from '@mui/icons-material/Paid';

export default function Cards({ title, text, icon }) {
  return (
    <Card>
      <div className="icon">{icon ? icon : <PaidIcon />}</div>
      <p className="title">{title ? title : null}</p>
      <p className="text">{text ? text : null}</p>
    </Card>
  );
}

const Card = styled.div`
  background: #1c1c1c;
  width: 250px;
  background-color: rgba(8, 8, 8, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid transparent;
  border-radius: 16px;
  padding: 25px;
  position: relative;
  &:hover {
    border: 1px solid grey;
  }
  .title {
    position: absolute;
    top: 9px;
    left: 60px;
    font-size: 1.1em;
  }
  .text {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-transform: uppercase;
    margin-top: 15px;
    margin-bottom: 10px;
  }
  p {
    font-weight: 500;
  }
`;
