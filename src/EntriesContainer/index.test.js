import React from "react";
import { mount } from "enzyme";
import Entries from ".";
import addEntry from "./addEntry";

jest.mock("./addEntry");

function build() {
  function FakeView() {
    return null;
  }

  return mount(
    <Entries>
      {({ entries, addEntry }) => (
        <FakeView entries={entries} addEntry={addEntry} />
      )}
    </Entries>
  );
}

describe("Entries", () => {
  it("pass the correct props to children", () => {
    expect(
      build()
        .children()
        .props()
    ).toMatchObject({
      entries: [],
      addEntry: expect.any(Function)
    });
  });

  describe("Adding a entry", () => {
    const dateTime = "10/21/2018 17:31:04";
    const AET = 8;
    let entries;
    let returnOfAddEntries;

    beforeEach(() => {
      const uut = build();
      returnOfAddEntries = [
        {
          mock: "mocked"
        }
      ];
      addEntry.mockImplementation(() => returnOfAddEntries);

      uut
        .children()
        .props()
        .addEntry(dateTime, AET);

      ({ entries } = uut
        .update()
        .children()
        .props());
    });

    it("changes the entries to be the return of addEntry", async () => {
      expect(entries).toBe(returnOfAddEntries);
    });

    it("calls addEntry with correct values", () => {
      expect(addEntry).toHaveBeenCalledWith(dateTime, AET, []);
    });
  });
});
