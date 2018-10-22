import React from "react";
import { mount } from "enzyme";
import Entries from "./Entries";

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

  it("correctly adds a entry", async () => {
    expect.assertions(1);

    const time = "10/21/2018 17:31:04";

    const uut = build();

    uut
      .children()
      .props()
      .addEntry(time, 8);

    const { entries } = uut
      .update()
      .children()
      .props();

    expect(entries).toMatchObject([{ time: new Date(time).getTime(), AET: 8 }]);
  });
});
