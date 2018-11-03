import { convertEntriesToDateTime, convertEntriesToTime } from ".";

describe("convertEntriesToDisplay", () => {
  const entries = [
    {
      AET: 8,
      dateTime: new Date(Date.parse("11/21/2018 17:31:04")).getTime()
    }
  ];

  describe("to dateTime", () => {
    it("convert entry to current time zone", () => {
      expect(convertEntriesToDateTime(entries)).toMatchObject([
        {
          AET: 8,
          dateTime: "11/21/2018 17:31:04"
        }
      ]);
    });

    it("convert entry to current given timezone", () => {
      expect(
        convertEntriesToDateTime(entries, "America/Los_Angeles")
      ).toMatchObject([
        {
          AET: 8,
          dateTime: "11/21/2018 09:31:04"
        }
      ]);
    });
  });

  describe("to time", () => {
    it("convert entry to current time zone", () => {
      expect(convertEntriesToTime(entries)).toMatchObject([
        {
          AET: 8,
          time: "17:31:04"
        }
      ]);
    });

    it("convert entry to current given timezone", () => {
      expect(
        convertEntriesToTime(entries, "America/Los_Angeles")
      ).toMatchObject([
        {
          AET: 8,
          time: "09:31:04"
        }
      ]);
    });
  });
});
