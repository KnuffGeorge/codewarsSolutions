// For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"

// Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

// Note: Make sure you return the correct message with correct spaces and punctuation.

// Please leave feedback for this kata. Cheers!

function cookie(x){
    let cookieEater = ""
    if (typeof x === "string"){
      cookieEater = "Zach"
    }else if (typeof x === "number"){
      cookieEater = "Monica"
    }else{
      cookieEater = 'the dog'
    }
    return `Who ate the last cookie? It was ${cookieEater}!`
  }



// Mr. despair wants to jump off Dutch act, So he came to the top of a building.

// Scientific research shows that a man jumped from the top of the roof, when the floor more than 6, the person will often die in an instant; When the floor is less than or equal to 6, the person will not immediately die, he would scream. (without proof)

// Input: floor, The height of the building (floor)

// Output: a string, The voice of despair(When jumping Dutch act)
// Example:

// sc(2) should return "Aa~ Pa! Aa!"

// It means:

// Mr. despair jumped from the 2 floor, the voice is "Aa~"
// He fell on the ground, the voice is "Pa!"
// He did not die immediately, and the final voice was "Aa!"

// sc(6) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!"

// sc(7) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"

// sc(10) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"

// if floor<=1, Mr. despair is safe, return ""

function sc(floor){
    let scream = ""
    if (floor <= 1) return scream
    for (let i = 1; i < floor; i++){
      scream += "Aa~ "
    }scream += "Pa!"
    if (floor <= 6){
      scream += " Aa!"
    }
    return scream
  }