// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
//     meal: 'vegetarian' },
//   { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
//     meal: 'standard' },
//   { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
//     meal: 'vegan' },
//   { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
//     meal: 'vegetarian' },
// ];

// your function should return the following object (the order of properties does not matter):

// { vegetarian: 2, standard: 1, vegan: 1 }

// Notes:

//     The order of the meals count in the object does not matter.
//     The count value should be a valid number.
//     The input array will always be valid and formatted as in the example above.
//     there are 5 possible meal options and the strings representing the selected meal option will always be formatted in the same way, as follows: 'standard', 'vegetarian', 'vegan', 'diabetic', 'gluten-intolerant'.

    function orderFood(list) {
        let order = {}
        for (let dev of list){
          if (dev.meal in order){
            order[dev.meal] += 1
          }else{
            order[dev.meal] = 1
          } 
        }return order
      }

    //   There are two lists, possibly of different lengths. The first one consists of keys, the second one consists of values. Write a function createDict(keys, values) that returns a dictionary created from keys and values. If there are not enough values, the rest of keys should have a None (JS null)value. If there not enough keys, just ignore the rest of values.

    function createDict(keys, values){
        let obj = {};
        for (let i  = 0; i < keys.length; i++){
          if (values[i] != undefined){
            obj[keys[i]] = values[i];
          }else{
            obj[keys[i]] = null;
          }
        }
        return obj;
      }   

    //   ⚠️ The world is in quarantine! There is a new pandemia that struggles mankind. Each continent is isolated from each other but infected people have spread before the warning. ⚠️

    //   🗺️ You would be given a map of the world in a type of string:
      
    //   string s = "01000000X000X011X0X"
      
    //   '0' : uninfected
      
    //   '1' : infected
      
    //   'X' : ocean
      
    //   ⚫ The virus can't spread in the other side of the ocean.
      
    //   ⚫ If one person is infected every person in this continent gets infected too.
      
    //   ⚫ Your task is to find the percentage of human population that got infected in the end.
      
    //   ☑️ Return the percentage % of the total population that got infected.
      
    //   ❗❗ The first and the last continent are not connected!

    function infected(s) {
        let totalPop = s.split('').filter(x=> x != "X").length
        let infectedPop = s.split("X").map(x=>x.includes('1') ? x.length : null).reduce((ac,el)=> ac + +el)
        if (totalPop == 0) return 0 
        return  (infectedPop / totalPop) * 100
      }

    //   Task

    //   Write a method, that replaces every nth char oldValue with char newValue.
    //   Inputs
      
    //       text: the string to modify
    //       n: change the target letter every nth occurrencies
    //       old_value (or similar): the targetted character
    //       new_value (or similar): the character to use as replacement
      
    //   Note for untyped languages: all inputs are always valid and of their expected type.
    //   Rules
      
    //       Your method has to be case sensitive!
    //       If n is 0 or negative or if it is larger than the count of the oldValue, return the original text without a change.

    function replaceNth(text, n, oldValue, newValue) {
        let letterCounter = 1
        let answer = ""
        for (let i = 0; i < text.length; i++){
          if (text[i] == oldValue && letterCounter == n){
            answer += newValue
            letterCounter = 1
          }else if (text[i] == oldValue && letterCounter < n){
            answer += text[i]
            letterCounter++
          }else{
            answer += text[i]
          }
        }return answer
      }

    //   The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

    //   What if the string is empty? Then the result should be empty object literal, {}.
    function count (string) {  
  
        let answer = {};
        
        for (let i = 0; i < string.length; i++) {
          if (string[i] in answer) {
            answer[string[i]]++;
          } else {
            answer[string[i]] = 1;
          }
        }
        
        return answer;
      }
      