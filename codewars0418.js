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
    