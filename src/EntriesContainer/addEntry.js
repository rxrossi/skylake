export default (time, AET, entries) => {
  return [
    ...entries,
    {
      time: new Date(time).getTime(),
      AET
    }
  ];
};
