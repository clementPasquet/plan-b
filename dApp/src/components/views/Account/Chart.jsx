import React from "react";
import { PieChart } from "react-minimal-pie-chart";

export default function Chart() {
  //! add valueToPer: value + "%"
  //! Add Animations
  const pieData = [
    { title: "USDC", value: 20, color: "#E38627" },
    { title: "USDT", value: 15, color: "#C13C37" },
    { title: "DAI", value: 20, color: "#6A2135" },
  ];

  return (
    <div className="pie-wrapper">
      <PieChart
        data={pieData}
        lineWidth={15}
        paddingAngle={5}
        label={({ dataEntry }) => dataEntry.value}
        labelStyle={index => ({
          fill: "#fff",
          fontSize: "12px",
          fontFamily: "Sans-serif",
          fontWeight: "600",
        })}
      />
    </div>
  );
}
