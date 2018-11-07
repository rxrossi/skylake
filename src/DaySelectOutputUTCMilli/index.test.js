import React from "react";
import { mount } from "enzyme";
import DaySelectOuputUTCMilli from ".";

function build() {
  function FakeView() {
    return null;
  }

  return mount(
    <DaySelectOuputUTCMilli>
      {milli => <FakeView milli={milli} />}
    </DaySelectOuputUTCMilli>
  );
}

describe("DaySelectAndFilter", () => {
  it("passes milli to children as undefined prior to selecting a date", () => {
    expect(
      build()
        .find("FakeView")
        .props()
    ).toEqual({ milli: null });
  });

  it("passes the right props to children", () => {
    const date = "2018-11-07";
    const dateInUTCMilli = new Date(date).getTime();

    const wrapper = build();
    wrapper.find("input").simulate("change", { target: { value: date } });

    expect(wrapper.find("FakeView").props()).toEqual({ milli: dateInUTCMilli });
  });
});
