// You need count how many valleys you will pass.

// Start is always from zero level.

// Every time you go down below 0 level counts as an entry of a valley, and as you go up to 0 level from valley counts as an exit of a valley.

// One passed valley is equal one entry and one exit of a valley.

// s='FUFFDDFDUDFUFUF'
// U=UP
// F=FORWARD
// D=DOWN

// To represent string above

// (level 1)  __
// (level 0)_/  \         _(exit we are again on level 0)
// (entry-1)     \_     _/
// (level-2)       \/\_/

// So here we passed one valley


function countingValleys(s) {
    let rules = {
      U: +1,
      F: 0,
      D: -1,
    }
    let level = 0
    let inValley = false
    let valleyCount = 0
    s.split('').forEach(x=> {
      level += rules[x]
      if (inValley && level == 0){
        valleyCount++
        inValley = false
      }if (level < 0){
        inValley = true
      }
      })
    return valleyCount
  }