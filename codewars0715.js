// Every Friday and Saturday night, farmer counts amount of sheep returned back to his farm (sheep returned on Friday stay and don't leave for a weekend).

// Sheep return in groups each of the days -> you will be given two arrays with these numbers (one for Friday and one for Saturday night). Entries are always positive ints, higher than zero.

// Farmer knows the total amount of sheep, this is a third parameter. You need to return the amount of sheep lost (not returned to the farm) after final sheep counting on Saturday.

function lostSheep(friday,saturday,total){
    return total - (friday.reduce((ac,el) =>ac+el,0) + saturday.reduce((ac,el)=>ac+el,0))
  }