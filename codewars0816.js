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


//   You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

//     true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
//     false otherwise.

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
//   { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
//   { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
//   { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
//   { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
//   { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
//   { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
// ];

// your function should return true as there is at least one developer from each age group.

// Notes:

//     The input array will always be valid and formatted as in the example above.
//     Age is represented by a number which can be any positive integer up to 199.

function isAgeDiverse(list) {
    let ages = list.map(x=> x.age)
    for (let i = 10; i < 100; i+=10){
      if(!ages.some(x=> x>=i && x<i+10)){
        return false
      }if(!ages.some(x=> x >= 100)){
        return false
      }
    }return true
  }
