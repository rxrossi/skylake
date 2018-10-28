import React from "react";

function DayView({ entries }) {
  return (
    <div>
      {entries.map(({ time, AET }) => (
        <li data-test="entry" key={time}>
          {time} - {AET}
        </li>
      ))}
    </div>
  );
}

export default DayView;
