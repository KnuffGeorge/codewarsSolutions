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

//   In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

// For example:

// "This Is A Test" ==> "TIAT"

// Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.

function makeString(s){
    return s.split(' ').map( x => x.charAt(0) ).join('');
  }

//   Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

// The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

function solution(pairs){
    let str = ""
    for (let i = 0; i < Object.keys(pairs).length; i++){
      str += Object.keys(pairs)[i] + " = " + pairs[Object.keys(pairs)[i]] + ","
    }return str.slice(0,-1)
  }
  