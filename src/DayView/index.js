import React from "react";
import "./dayView.css";

//
function DayView({ entries }) {
  return (
    <table>
      <thead>
        <tr>
          <td>Date</td>
          <td>AET</td>
        </tr>
      </thead>
      <tbody>
        {entries.map(({ time, AET }) => (
          <tr data-test="entry" key={time}>
            <td>{time}</td>
            <td>{AET}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DayView;
