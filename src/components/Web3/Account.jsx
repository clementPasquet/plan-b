import { Button } from "antd";
import React from "react";
import Address from "./Address";

//! Change CSS 
//!todo add hover

export default function Account({
  useBurner,
  address,
  mainnetProvider,
  minimized,
  web3Modal,
  loadWeb3Modal,
  logoutOfWeb3Modal,
  isContract,
}) {
  const modalButtons = [];
  if (web3Modal) {
    if (web3Modal.cachedProvider) {
      modalButtons.push(
        <Button key="logoutbutton" shape="round" size="large" onClick={logoutOfWeb3Modal}>
          logout
        </Button>,
      );
    } else {
      modalButtons.push(
        <Button key="loginbutton" shape="round" size="large" onClick={loadWeb3Modal}>
          connect
        </Button>,
      );
    }
  }
  const display = minimized ? (
    ""
  ) : (
    <span style={{ marginTop: "7px", fontSize: "1.15em" }} >
      {web3Modal && web3Modal.cachedProvider ? (
        <>{address && <Address address={address} ensProvider={mainnetProvider} />}</>
      ) : useBurner ? (
        ""
      ) : isContract ? (
        <>{address && <Address address={address} ensProvider={mainnetProvider} />}</>
      ) : (
        ""
      )}
    </span>
  );

  return (
    <div style={{ display: "flex", width: "215px", justifyContent: "space-around" }} >
      {display}
      {modalButtons}
    </div>
  );
}