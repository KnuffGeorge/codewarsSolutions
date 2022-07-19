// Our loose definition of Vampire Numbers can be described as follows:

// 6 * 21 = 126
// # 6 and 21 would be valid 'fangs' for a vampire number as the 
// # digits 6, 1, and 2 are present in both the product and multiplicands

// 10 * 11 = 110
// # 110 is not a vampire number since there are three 1's in the
// # multiplicands, but only two 1's in the product

// Create a function that can receive two 'fangs' and determine if the product of the two is a valid vampire number.

var vampire_test = function(a, b){
    let prod = (a*b).toString().split("").sort().join('')
    let add = ("" + a + b).toString().split("").sort().join('') 
    return prod === add
   }



//    Input : an array of integers.

//    Output : this array, but sorted in such a way that there are two wings:

//    the left wing with numbers decreasing,

//    the right wing with numbers increasing.

//    the two wings have the same length. If the length of the array is odd the wings are around the bottom, if the length is even the bottom is considered to be part of the right wing.

//    each integer l of the left wing must be greater or equal to its counterpart r in the right wing, the difference l - r being as small as possible. In other words the right wing must be nearly as steep as the left wing.

// The function is make_valley or makeValley or make-valley.

function makeValley(arr) {
    let sorted = arr.sort((a,b)=> b-a)
    let left = []
    let right = []
    sorted.forEach((x,i) => i % 2 == 0 ? left.push(x) : right.push(x))
    return left.concat(right.reverse())
}