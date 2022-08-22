// Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

// If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".
// Examples

// "!!", "??"     -->  "Right"
// "!??", "?!!"   -->  "Left"
// "!?!!", "?!?"  -->  "Left"
// "!!???!????", "??!!?!!!!!!!"  -->  "Balance"

function balance(left,right){
    const weights = (str) => [...str].reduce((ac,el)=> el == "?" ? ac += 3 : ac +=2, 0)
    return weights(left) == weights(right) ? "Balance" : weights(left) > weights(right) ? "Left" : "Right"
     
     
   }
