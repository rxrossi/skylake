import filter from ".";

describe("Filter", () => {
  const entries = [
    {
      AET: 8,
      dateTime: new Date(Date.UTC(2018, 11, 3, 12, 30, 1)).getTime()
    },
    {
      AET: 7,
      dateTime: new Date(Date.UTC(2018, 11, 3, 12, 38, 5)).getTime()
    },
    {
      AET: 6,
      dateTime: new Date(Date.UTC(2018, 11, 3, 23, 59, 59)).getTime()
    },
    {
      AET: 5,
      dateTime: new Date(Date.UTC(2018, 11, 4, 11, 30, 6)).getTime()
    },
    {
      AET: 4,
      dateTime: new Date(Date.UTC(2018, 11, 4, 11, 38, 8)).getTime()
    },
    {
      AET: 3,
      dateTime: new Date(Date.UTC(2019, 0, 1, 15, 30, 0)).getTime()
    },
    {
      AET: 2,
      dateTime: new Date(Date.UTC(2019, 0, 2, 15, 32, 0)).getTime()
    }
  ];

  it("filter by day", () => {
    const start = [2018, 12, 3];
    const end = [2018, 12, 3];

    expect(filter(entries)(start, end)).toMatchObject(entries.slice(0, 3));
  });

  it("filter by day 2", () => {
    const start = [2018, 12, 4];
    const end = [2018, 12, 4];

    expect(filter(entries)(start, end)).toMatchObject(entries.slice(3, 5));
  });

  it("filter by month", () => {
    const start = [2018, 12];
    const end = [2018, 12];

    expect(filter(entries)(start, end)).toMatchObject(entries.slice(0, 5));
  });

  it("filter by year", () => {
    const start = [2018];
    const end = [2018];

    expect(filter(entries)(start, end)).toMatchObject(entries.slice(0, 5));
  });
});
