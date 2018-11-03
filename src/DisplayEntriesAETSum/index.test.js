import React from "react";
import { shallow } from "enzyme";
import DisplayEntriesSum from ".";

describe("DisplayEntriesSum", () => {
  const entries = [
    {
      AET: 10
    },
    {
      AET: 8
    },
    { AET: 50 }
  ];

  it("displays the sum of AET in HH:mm format", () => {
    expect(shallow(<DisplayEntriesSum entries={entries} />).text()).toContain(
      "1:08"
    );
  });
});
