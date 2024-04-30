function sevenBoom(arr) {
  for (let i = 0; i < arr.length; i++)
    if (arr[i].toString().includes("7")) return "Boom!";

  return "there is no 7 in the array";
}
