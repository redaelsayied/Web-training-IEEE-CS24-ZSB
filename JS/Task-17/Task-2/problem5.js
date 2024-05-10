function squareDigits(n) {
    
  let string = n.toString().split("");
  let result = "";

  string.forEach((char) => {
    let temp = parseInt(char);
    result += Math.pow(temp, 2);
  });

  return parseInt(result);
}
