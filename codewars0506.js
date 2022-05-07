// Coding in function giveMeFive, function accept 1 parameter:obj, it's an object.

// You need to the traverse the obj, if the length of the object key equals to 5, then push the key value to the array (you need to define the array by yourself, this time I won't help you). Additionally push the value to the array as well, if the length of the value is equal to 5.

// Return the five after works finished.

// You should use for..in in your code, otherwise, your solution may not pass this kata. Don't learn bad habits from those lazy guys ;-)

function giveMeFive(obj){
    let five = [];
    
    for (let key in obj) {
      if (key.length === 5) five.push(key);
      if (obj[key].length === 5) five.push(obj[key]);
    }
    
    return five;
  }

//   Complete the Person object, by completing the FillFriends function to fill the _friends Array for the person object.
//   Output
//   Return the person object with the Name, Friends and FillFriends function filled out which will fill the input into the Friends property.
  
//   Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

  var Person = function(){
    var person = {
      _name: "Leroy",
      _friends: [],
      fillFriends(f) { this._friends = f; }
    }
    return person;
  }