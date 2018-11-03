export default entries => (startInput, endInput) => {
  const start = adjustMonthDigit(startInput);
  const end = adjustMonthDigit(startInput);

  end[end.length - 1] = end[end.length - 1] + 1;

  return entries.filter(({ dateTime }) => {
    const startTime = new Date(Date.UTC(...start)).getTime();
    const endTime = new Date(Date.UTC(...end)).getTime();

    return dateTime >= startTime && dateTime <= endTime;
  });
};

function adjustMonthDigit(input) {
  const output = [...input];

  if (output[1]) {
    output[1] = output[1] - 1;
  }

  return output;
}
