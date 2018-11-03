import addEntry from "./addEntry";
import { saveEntry } from "./storage";

jest.mock("./storage", () => ({
  saveEntry: jest.fn()
}));

describe("AddEntries", () => {
  describe("adding a new entry", () => {
    let entries;
    const dateTime = "10/21/2018 17:31:04";
    const AET = 8;

    beforeEach(() => {
      entries = addEntry(dateTime, AET, []);
    });

    it("correctly adds the new in UTC milliseconds", () => {
      expect(entries).toEqual([
        {
          dateTime: new Date(dateTime).getTime(),
          AET
        }
      ]);
    });

    it("calls saveEntry with the entry", () => {
      expect(saveEntry).toHaveBeenLastCalledWith({
        dateTime: new Date(dateTime).getTime(),
        AET
      });
    });
  });
});
