function getAbsSum(arr) {
  return arr.reduce((acc, val) => Math.abs(val) + acc, 0);
}
