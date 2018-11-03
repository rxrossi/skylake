import { DateTime, Duration } from "luxon";

export default (givenPeriod, zone) => {
  const [year, month, day] = givenPeriod;

  const start = DateTime.fromObject({
    year,
    month,
    day,
    zone
  });

  return [start.toMillis(), addDuration(givenPeriod.length, start).toMillis()];
};

function addDuration(addTo, initialDateTime) {
  switch (addTo) {
    case 1:
      return initialDateTime.plus(Duration.fromObject({ years: 1 }));
    case 2:
      return initialDateTime.plus(Duration.fromObject({ months: 1 }));
    case 3:
      return initialDateTime.plus(Duration.fromObject({ days: 1 }));
  }
}
