// Given a list of integers values, your job is to return the sum of the values; however, if the same integer value appears multiple times in the list, you can only count it once in your sum.

function uniqueSum(lst){
    return lst.length > 0 ? Array.from(new Set(lst)).reduce((ac,el)=> ac + el,0) : null
  }