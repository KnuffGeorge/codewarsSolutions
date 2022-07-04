// Let's create some scrolling text!

// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

function scrollingText(text){
    let array = []
    for (let i = 0; i<text.length; i++){
      array.push(text.slice(i).toUpperCase() + text.slice(0,i).toUpperCase()) 
    }return array
  }

//   You have an array of numbers 1 through n (where 1 <= n <= 10). The array needs to be formatted correctly for the person reading the countdown of a spaceship launch.

//   Unfortunately, the person reading the countdown only knows how to read strings. After the array is sorted correctly make sure it's in a format he can understand.
  
//   Between each number should be a space and after the final number (n) should be the word 'liftoff!'

function liftoff(instructions){
    return instructions.sort((a, b) => b - a).join(' ') + ' liftoff!';
  }

//   You will be given an array which will include both integers and characters.

//   Return an array of length 2 with a[0] representing the mean of the ten integers as a floating point number. There will always be 10 integers and 10 characters. Create a single string with the characters and return it as a[1] while maintaining the original order.
  
//   lst = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']
  
//   Here is an example of your return
  
//   [3.6, "udiwstagwo"]

function mean(lst){
    let nums = lst.filter(x=> !isNaN(+x))
    let ltrs = lst.filter(x=> isNaN(+x))
    return [(nums.reduce((ac,el)=> ac + +el,0) / nums.length), ltrs.join('')]
  }

//   Unscramble the eggs.

//   The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.

function unscrambleEggs(word){
    return word.split("egg").join("")
  }

//   Create a function isDivisible(n,...) that checks if the first argument n is divisible by all other arguments (return true if no other arguments)

//   Example:
  
//   isDivisible(6,1,3)--> true because 6 is divisible by 1 and 3
//   isDivisible(12,2)--> true because 12 is divisible by 2
//   isDivisible(100,5,4,10,25,20)--> true
//   isDivisible(12,7)--> false because 12 is not divisible by 7

function isDivisible(){
    return ![...arguments].map((x,i,arr)=> arr[0] % x == 0).includes(false)
  }

//   Lot of museum allow you to be a member, for a certain amount amount_by_year you can have unlimitted acces to the museum.

//   In this kata you should complete a function in order to know after how many visit it will be better to take an annual pass. The function take 2 arguments annual_price and individual_price.

function howManyTimes(annualPrice, individualPrice) {
    return Math.ceil(annualPrice / individualPrice);
  }
  