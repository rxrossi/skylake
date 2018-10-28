export default (time, AET, entries) => {
  return [
    ...entries,
    {
      dateTime: new Date(time).getTime(),
      AET
    }
  ];
};
