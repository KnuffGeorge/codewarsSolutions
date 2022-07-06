// Create a function called noRepeat() that takes a string argument and returns a single letter string of the first not repeated character in the entire string.

// noRepeat("aabbccdde") // => "e"
// noRepeat("wxyz") // => "w"
// noRepeat("testing") // => "e"

function noRepeat(str) {  
    return [...str].filter((x,i,arr)=> arr.indexOf(x) === arr.lastIndexOf(x))[0]
    
    }

    // *** No Loops Allowed ***

    // You will be given an array (a) and a limit value (limit). You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
    
    // You can assume all values in the array are numbers.
    
    // Do not use loops. Do not modify input array.

    function smallEnough(a, limit) {
        return a.every(x => x <= limit);
      }  

    //   Print all numbers up to 3rd parameter which are multiple of both 1st and 2nd parameter.

    //   Python, Javascript, Java, Ruby versions: return results in a list/array
      
    //   NOTICE:
      
    //       Do NOT worry about checking zeros or negative values.
    //       To find out if 3rd parameter (the upper limit) is inclusive or not, check the tests, it differs in each translation

    // Javascript: return multiples into an array
function multiples(s1,s2,s3){
    let arr = []
    let num = Math.min(s1,s2)
    while (num < s3){
      if (num % s1 === 0 && num % s2 === 0 && num < s3) arr.push(num)
      num += Math.min(s1,s2)
    }
    return arr;
  }

//   Complete the function that takes an array of words.

//   You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.
  
//   For example:
  
//   ["yoda", "best", "has"]  -->  "yes"
//     ^        ^        ^
//     n=0     n=1     n=2

function nthChar(words){
    return words.map((x,i) => x[i]).join('')
   }
  
//    You have a group chat application, but who is online!?

//    You want to show your users which of their friends are online and available to chat!
   
//    Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.
   
//    If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.
   
//    The input data has the following structure:
   
//    [{
//      username: 'David',
//      status: 'online',
//      lastActivity: 10
//    }, {
//      username: 'Lucy', 
//      status: 'offline',
//      lastActivity: 22
//    }, {
//      username: 'Bob', 
//      status: 'online',
//      lastActivity: 104
//    }]
   
//    The corresponding output should look as follows:
   
//    {
//      online: ['David'],
//      offline: ['Lucy'],
//      away: ['Bob']
//    }
   
//    If for example, no users are online the output should look as follows:
   
//    {
//      offline: ['Lucy'],
//      away: ['Bob']
//    }

const whosOnline = (friends) => {
    let online = friends.filter(x=> x.status === 'online' && x.lastActivity <= 10).map(x=> x.username)
    let offline = friends.filter(x=> x.status === 'offline').map(x=> x.username)
    let away = friends.filter(x=> x.status === 'online' && x.lastActivity > 10).map(x=> x.username)
    
    let answer = {}
    online.length > 0 ? answer.online = online : null
    offline.length > 0 ? answer.offline = offline : null
    away.length > 0 ? answer.away = away : null
     
    return answer  
    
    }
   