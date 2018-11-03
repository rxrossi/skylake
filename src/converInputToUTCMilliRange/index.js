import { DateTime } from "luxon";

export default (givenPeriod, zone) => {
  const [year, month, day] = givenPeriod;

  const [yearEnd, monthEnd, dayEnd] = [
    ...givenPeriod.slice(0, givenPeriod.length - 1),
    givenPeriod[givenPeriod.length - 1] + 1
  ];

  return [
    DateTime.fromObject({
      year,
      month,
      day,
      zone
    }).toMillis(),
    DateTime.fromObject({
      year: yearEnd,
      month: monthEnd,
      day: dayEnd,
      zone
    }).toMillis()
  ];
};
