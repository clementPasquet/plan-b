import React from "react";
import styled from "styled-components";
import LendingCards from "../Cards/LendingCards";

export default function Lending() {
  return (
    <LendingPage>
      <LendingCards />
    </LendingPage>
  );
}

const LendingPage = styled.div`
  display: flex;
`;