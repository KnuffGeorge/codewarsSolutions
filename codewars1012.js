// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

//     Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
//     Each part will be in a string
//     Elements of a pair must be in the same order as in the original array.

// Examples of returns in different languages:

// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]] 
// or
//  a = {"az", "toto", "picaro", "zone", "kiwi"} -->
// {{"az", "toto picaro zone kiwi"}, {"az toto", "picaro zone kiwi"}, {"az toto picaro", "zone kiwi"}, {"az toto picaro zone", "kiwi"}}
// or
// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// [("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
// or 
// a = [|"az", "toto", "picaro", "zone", "kiwi"|] -->
// [("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
// or
// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// "(az, toto picaro zone kiwi)(az toto, picaro zone kiwi)(az toto picaro, zone kiwi)(az toto picaro zone, kiwi)"

function partlist(arr) {
    let answer = [] 
    for (let i = 1; i < arr.length; i++){
    answer.push([arr.slice(0,i).join(" "), arr.slice(i).join(" ")])
    }return answer
  }

//   Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

//   For instance:
  
//   "hello case".camelCase() => HelloCase
//   "camel case word".camelCase() => CamelCaseWord
  
//   Don't forget to rate this kata! Thanks :)
    


  String.prototype.camelCase= function(string){
    if (!this.toString()) return ""
    return this.toString().trim().split(" ").map(x=> x[0].toUpperCase() + x.slice(1).toLowerCase()).join("")
  }