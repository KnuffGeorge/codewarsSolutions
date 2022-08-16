// You will be given a sequence of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

//     true if all of the following continents / geographic zones will be represented by at least one developer: 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
//     false otherwise.

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
//   { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
//   { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
//   { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
//   { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
// ];

// your function should return true as there is at least one developer from the required 5 geographic zones.

// Notes:

//     The input array and continent names will always be valid and formatted as in the list above for example 'Africa' will always start with upper-case 'A'.

function allContinents(list) {
    let continents = list.map(x=> x.continent)
    return ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'].every(x=>continents.includes(x))
  }

//   You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Given the following input array:

// var list1 = [
//   { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
//   { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
// ];

// write a function that when executed as findOddNames(list1) returns only the developers where if you add the ASCII representation of all characters in their first names, the result will be an odd number:

// [
//   { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
// ]

// Explanation of the above:

//     Sum of ASCII codes of letters in 'Aba' is: 65 + 98 + 97 = 260 which is an even number
//     Sum of ASCII codes of letters in 'Abb' is: 65 + 98 + 98 = 261 which is an odd number

// Notes:

//     Preserve the order of the original list.
//     Return an empty array [] if there is no developer with an "odd" name.
//     The input array and first names will always be valid and formatted as in the example above.

function findOddNames(list) {
    return list.filter(x=> [...x.firstName].reduce((ac,el)=> ac + el.charCodeAt(),0) % 2 == 1)
  }
