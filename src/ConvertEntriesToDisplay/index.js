import { DateTime } from "luxon";

export function convertEntriesToDateTime(entries, zone) {
  return entries.map(({ AET, dateTime }) => ({
    AET,
    dateTime: DateTime.fromJSDate(new Date(dateTime))
      .setZone(zone)
      .toFormat("LL/dd/yyyy HH:mm:ss")
  }));
}

export function convertEntriesToTime(entries, zone) {
  return entries.map(({ AET, dateTime }) => ({
    AET,
    dateTime: DateTime.fromJSDate(new Date(dateTime))
      .setZone(zone)
      .toFormat("HH:mm:ss")
  }));
}
