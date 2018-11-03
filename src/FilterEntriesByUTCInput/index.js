export default entries => ([start, end]) => {
  return entries.filter(({ dateTime }) => {
    return dateTime >= start && dateTime <= end;
  });
};
