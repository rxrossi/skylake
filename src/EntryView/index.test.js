import React from "react";
import { shallow } from "enzyme";
import EntryView from ".";

describe("EntryView", () => {
  it("renders the date in expected format", () => {
    const time = "some time";
    const text = shallow(<EntryView time={time} AET={8} />).text();

    expect(text).toMatch(time);
    expect(text).toMatch("8");
  });
});
