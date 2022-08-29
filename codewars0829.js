// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
    return url.split('//')[1] ? url.split('//')[1].split('www.').join('').split(".")[0] : url.split('www.').join('').split(".")[0]
  }

//   Due to another of his misbehaved, the primary school's teacher of the young Gauß, Herr J.G. Büttner, to keep the bored and unruly young schoolboy Karl Friedrich Gauss busy for a good long time, while he teaching arithmetic to his mates, assigned him the problem of adding up all the whole numbers from 1 through a given number n.

// Your task is to help the young Carl Friedrich to solve this problem as quickly as you can; so, he can astonish his teacher and rescue his recreation interval.

// Here's, an example:

// f(n=100) // returns 5050 

// It's your duty to verify that n is a valid positive integer number. If not, please, return false (None for Python, null for C#, 0 for COBOL).

//     Note: the goal of this kata is to invite you to think about some 'basic' mathematic formula and how you can do performance optimization on your code.

//     Advanced - experienced users should try to solve it in one line, without loops, or optimizing the code as much as they can.

function f(n){
    let sum = 0
    if (n > 0 && n == n.toFixed(0)){
      for (let i = 1; i <= n; i++){
        sum += i
      }
    }  
    return sum ? sum : false 
    };

    // It's time to create an autocomplete function! Yay!

    // The autocomplete function will take in an input string and a dictionary array and return the values from the dictionary that start with the input string. If there are more than 5 matches, restrict your output to the first 5 results. If there are no matches, return an empty array.
    
    // Example:
    
    // autocomplete('ai', ['airplane','airport','apple','ball']) = ['airplane','airport']
    
    // For this kata, the dictionary will always be a valid array of strings. Please return all results in the order given in the dictionary, even if they're not always alphabetical. The search should NOT be case sensitive, but the case of the word should be preserved when it's returned.
    
    // For example, "Apple" and "airport" would both return for an input of 'a'. However, they should return as "Apple" and "airport" in their original cases.
    
    // Important note:
    
    // Any input that is NOT a letter should be treated as if it is not there. For example, an input of "$%^" should be treated as "" and an input of "ab*&1cd" should be treated as "abcd".
    
    // (Thanks to wthit56 for the suggestion!)
    
    function autocomplete(input, dictionary){
        let str = [...input].filter(x=> (x.charCodeAt() > 65 && x.charCodeAt() < 90) || (x.charCodeAt() > 96 && x.charCodeAt() < 123)).join("")
        console.log(input, str)
        return dictionary.filter(x=> x.toLowerCase().startsWith(str.toLowerCase())).slice(0,5)
      }