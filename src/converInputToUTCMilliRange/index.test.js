import { DateTime } from "luxon";
import getRangeInMilliseconds from ".";

describe("getRangeInMilliseconds", () => {
  it("converts a local input to range in UTC milliseconds", () => {
    const input = [2018, 10, 1];
    const expectedOutput = [
      new Date("2018/10/01").getTime(),
      new Date("2018/10/02").getTime()
    ];

    expect(getRangeInMilliseconds(input)).toMatchObject(expectedOutput);
  });

  it("converts a America/Los Angeles input to range in UTC milliseconds", () => {
    const input = [2018, 10, 1];
    const tz = "America/Los_Angeles";

    const expectedOutput = [
      DateTime.fromObject({
        year: 2018,
        month: 10,
        day: 1,
        zone: tz
      }).toMillis(),
      DateTime.fromObject({
        year: 2018,
        month: 10,
        day: 2,
        zone: tz
      }).toMillis()
    ];

    expect(getRangeInMilliseconds(input, tz)).toMatchObject(expectedOutput);
  });
});
