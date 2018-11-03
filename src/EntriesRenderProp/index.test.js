import React from "react";
import { mount } from "enzyme";
import Entries from ".";
import addEntry from "./addEntry";
import { loadEntries } from "./storage";

jest.mock("./addEntry");
jest.mock("./storage", () => ({
  loadEntries: jest.fn(() => [])
}));

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
  afterEach(() => {
    jest.clearAllMocks();
  });

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

  describe("Loading entries on mount", () => {
    it("expect loadEntries to have been called", () => {
      build();
      expect(loadEntries).toHaveBeenCalledTimes(1);
    });

    it("expect entries from loadEntries to be passed to children", async () => {
      const milliseconds = new Date().getTime();
      const entries = [
        {
          AET: 8,
          dateTime: milliseconds
        }
      ];

      loadEntries.mockReturnValueOnce(entries);

      const uut = build();

      await new Promise(resolve => setImmediate(resolve));

      const props = uut.children().props();

      expect(props).toMatchObject({
        entries,
        addEntry: expect.any(Function)
      });
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
