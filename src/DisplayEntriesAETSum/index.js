import { Duration } from "luxon";
import React from "react";

export default ({ entries }) => {
  const minutes = entries.reduce((prev, { AET }) => prev + Number(AET), 0);
  const displayTotalAET = Duration.fromObject({ minutes }).toFormat("h:mm");
  return <div style={{ display: "inline" }}>{displayTotalAET}</div>;
};
