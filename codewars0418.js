// In javascript, Object is one of basic data types. Define an Object can use var obj=new Object() or var obj={}

// You can define the object attributes during initialization, like this:

// var animal={name:"dog"}

// you can also set/get some properties after the object definition, like this:

// var animal={}
// animal.name="dog"  (or animal["name"]="dog")

// Task

// Give you a function animal, accept 1 parameter:obj like this:

// {name:"dog",legs:4,color:"white"}

// and return a string like this:

// "This white dog has 4 legs."

function animal(obj){
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
  }
  
  
//   Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
//   Examples
  
//   replace("Hi!") === "H!!"
//   replace("!Hi! Hi!") === "!H!! H!!"
//   replace("aeiou") === "!!!!!"
//   replace("ABCDE") === "!BCD!"

function replace(s){
    let vowels = "aeiouAEIOU"
    return s.split('').map(x => vowels.includes(x) ? '!' : x).join('')
  }


//   Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.

//   The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - if both strings are empty then you should return false/False.
//   Examples
  
//   isOpposite("ab","AB") should return true;
//   isOpposite("aB","Ab") should return true;
//   isOpposite("aBcd","AbCD") should return true;
//   isOpposite("AB","Ab") should return false;
//   isOpposite("","") should return false;
  
function isOpposite(s1,s2){
    if (s1.length != s2.length || s1.length === 0 || s2.length == 0){
      return false
    }else{
    for (let i = 0; i < s1.length; i++){
      if (s1[i] === s1[i].toLowerCase() && s1[i].toUpperCase() === s2[i]){
         console.log('all good!')      
      }else if (s1[i] === s1[i].toUpperCase() && s1[i].toLowerCase() === s2[i]){
         console.log('all good!')
      }else{
        return false
      }
  }return true
  }
  }
  