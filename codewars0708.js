// One night you go for a ride on your motorcycle. At 00:00 you start your engine, and the built-in timer automatically begins counting the length of your ride, in minutes. Off you go to explore the neighborhood.

// When you finally decide to head back, you realize there's a chance the bridges on your route home are up, leaving you stranded! Unfortunately, you don't have your watch on you and don't know what time it is. All you know thanks to the bike's timer is that n minutes have passed since 00:00.

// Using the bike's timer, calculate the current time. Return an answer as the sum of digits that the digital timer in the format hh:mm would show.
// Example

// For n = 240, the output should be

// lateRide(n) === 4

// Since 240 minutes have passed, the current time is 04:00. The digits sum up to 0 + 4 + 0 + 0 = 4, which is the answer.

// For n = 808, the output should be

// lateRide(n) === 14

// 808 minutes mean that it's 13:28 now, so the answer should be 1 + 3 + 2 + 8 = 14.

function lateRide(n) {
    return (Math.floor(n/60) + "" + n%60).split('').reduce((ac,el)=> ac + +el,0) 
  }

//   Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

//   We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.
  
//   For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"
  
//   -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
//   solve("zodiacs") = 26
  
//   For the word "strength", solve("strength") = 57
//   -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The 

function solve(s) {
    let vowels = "aeiou"
    let max = 0
    let totals = []
    let values = s.split("").map(x=> vowels.includes(x) ? 0 : x.charCodeAt() - 96)
    for (let num of values){
      if (num == 0){
        totals.push(max)
        max = 0
      }max += +num
    }totals.push(max)
    console.log(values, totals)
    return Math.max(...totals)
  };