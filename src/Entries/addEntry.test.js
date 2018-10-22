import addEntry from "./addEntry";

describe("AddEntries", () => {
  it("correctly adds a new entry", () => {
    const time = "10/21/2018 17:31:04";
    const AET = 8;

    expect(addEntry(time, AET, [])).toEqual([
      {
        time: new Date(time).getTime(),
        AET
      }
    ]);
  });
});
