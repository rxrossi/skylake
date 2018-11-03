import { saveEntry } from "./storage";

export default (time, AET, entries) => {
  const entry = {
    dateTime: new Date(time).getTime(),
    AET
  };

  saveEntry(entry);

  return [...entries, entry];
};
