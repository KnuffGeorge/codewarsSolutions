// Enough is enough!

// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?
// Task

// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

function deleteNth(arr,n){
    let answer = []
    for (let i = 0; i<arr.length; i++){
      if (answer.filter(x => x == arr[i]).length < n){
        answer.push(arr[i])
      }
    }
   return answer
   }

//    Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

//    Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
   
//    If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
//    Examples
   
//    "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
//    "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
//    ""  -->  ""
   
function order(words){
    let answer = []
    let map = words.split('').filter(x => !isNaN(+x) && x != " ")
    let wordArr = words.split(' ')
    console.log(map, wordArr)
    for (let i = 0; i < wordArr.length; i++){
    answer[map[i]] = wordArr[i] 
    }
    return answer.join(' ').trim()
  } 

//   Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string){
    return string.split(' ').map(x => x.length >= 5 ? x = x.split('').reverse().join('') : x = x).join(' ')
  }

//   Hide Kata Description

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
// Examples

// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers){
    let odd = integers.filter(x => Math.abs(x) % 2 == 1)
    let even = integers.filter(x => Math.abs(x) % 2 == 0)
    
    return even.length > odd.length ? odd[0] : even[0]
  }

  

