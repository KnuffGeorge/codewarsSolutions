// Pair of gloves

// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

// Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.
// Examples:

// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)

// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)

function numberOfPairs(gloves)
{
  let colors = Array.from(new Set(gloves))
  return colors.map(x=> Math.floor(gloves.filter(y=>y==x).length / 2)).reduce((ac,el)=> ac + el)
}
// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.
// Examples

// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"

function whatCentury(year)
{
  let centuryNumber = Math.floor(((Number(year) / 100)) + 1).toString() 
  if (year.slice(-2) == "00") centuryNumber = (+centuryNumber - 1).toString()
  let lastDigit = centuryNumber.slice(-1)
  if (centuryNumber === "11" || centuryNumber === "12"  || centuryNumber === "13"){
    return centuryNumber + "th"
  }
  switch(lastDigit){
  case "1":
    return centuryNumber + "st"
  case "2":
    return centuryNumber + "nd"
  case "3":
    return centuryNumber + "rd"
  default: 
    return centuryNumber + "th"
}
 }
   


