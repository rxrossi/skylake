import addEntry from "./addEntry";

describe("AddEntries", () => {
  it("correctly adds a new entry in UTC milliseconds", () => {
    const dateTime = "10/21/2018 17:31:04";
    const AET = 8;

    expect(addEntry(dateTime, AET, [])).toEqual([
      {
        dateTime: new Date(dateTime).getTime(),
        AET
      }
    ]);
  });
});
