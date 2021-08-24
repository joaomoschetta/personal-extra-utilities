/*
  If the number is less than 2 digits, become like this: 05, 06, 07...
  If the number have 2 digits keep with 2 digits(the same for more digits)
*/

export default function doubleDigitTest(number) {
  if (number < 10) {
    return `0${number}`;
  } else {
    return number;
  }
}
