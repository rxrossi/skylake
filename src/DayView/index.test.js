import React from "react";
import { shallow } from "enzyme";
import DayView from ".";

describe("DayView", () => {
  it("renders the given entries", () => {
    const givenEntries = [
      {
        time: new Date().getTime(),
        AET: 8
      }
    ];

    const uut = shallow(<DayView entries={givenEntries} />);

    expect(uut.find("[data-test='entry']")).toHaveLength(1);
  });
});
