import React from "react";
import { Chart } from "primereact/chart";
import {
  BarData,
  BarOptions,
  PieData,
  PieOptions,
} from "../../../util/chartData";

export default function Charts({ type }) {
  return (
    <Chart
      type={type}
      data={type === "polarArea" ? PieData : BarData}
      options={type === "polarArea" ? PieOptions : BarOptions} 
      style={
        type === "polarArea"
          ? { height: "400px", display: "flex", justifyContent: "center" }
          : {
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }
      }
    />
  );
}
