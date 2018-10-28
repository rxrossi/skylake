import React from "react";

function DayView({ entries }) {
  return (
    <div>
      <ul>
        {entries.map(({ time, AET }) => (
          <li data-test="entry" key={time}>
            {time} - {AET}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DayView;
