// Given a list of integers values, your job is to return the sum of the values; however, if the same integer value appears multiple times in the list, you can only count it once in your sum.

function uniqueSum(lst){
    return lst.length > 0 ? Array.from(new Set(lst)).reduce((ac,el)=> ac + el,0) : null
  }

//   Enjoying your holiday, you head out on a scuba diving trip!

// Disaster!! The boat has caught fire!!

// You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

function fireFight(s){
    return s.split("Fire").join("~~")
  }