function leapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
// the leap year is a year that is divisible by 4 or 400 but not visible by 400
