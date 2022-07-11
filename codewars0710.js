// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return the string "NaN".

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

function dashatize(num) {
    return Math.abs(num).toString().split('').map((x,i,arr)=> {
      if (x % 2 == 1){
        if(arr.length == 1){
          return x
        }if (i == 0){
          return x + "-"
        }else if (i == arr.length-1){
          return "-" + x
        }else{
          return "-" + x + "-"
        }
      }return x
    }).join('').split("--").join('-')
  }
