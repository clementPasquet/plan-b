import { Typography } from "antd";
import React from "react";

export default function Address(props) {
  const address = props.value || props.address;
  const displayAddress = address?.substr(0, 5) + "..." + address?.substr(-4);

  return (
    <span>
      <span>
        {props.onChange ? (
          <Typography editable={{ onChange: props.onChange }}>{displayAddress}</Typography>
        ) : (
          <Typography>{displayAddress}</Typography>
        )}
      </span>
    </span>
  );
}