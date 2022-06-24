// Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain worth when battling against others. On the side of good we have the following races, with their associated worth:

//     Hobbits: 1
//     Men: 2
//     Elves: 3
//     Dwarves: 3
//     Eagles: 4
//     Wizards: 10

// On the side of evil we have:

//     Orcs: 1
//     Men: 2
//     Wargs: 2
//     Goblins: 2
//     Uruk Hai: 3
//     Trolls: 5
//     Wizards: 10

// Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.

// Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.
// Input:

// The function will be given two parameters. Each parameter will be a string of multiple integers separated by a single space. Each string will contain the count of each race on the side of good and evil.

// The first parameter will contain the count of each race on the side of good in the following order:

//     Hobbits, Men, Elves, Dwarves, Eagles, Wizards.

// The second parameter will contain the count of each race on the side of evil in the following order:

//     Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.

// All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.
// Output:

// Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie.

function goodVsEvil(good, evil){
    let goodPts = {
      0: 1,
      1: 2,
      2: 3,
      3: 3,
      4: 4, 
      5: 10
    }
    let evilPts = {
      0: 1,
      1: 2,
      2: 2,
      3: 2,
      4: 3,
      5: 5,
      6: 10
    }
    let goodScore = good.split(' ').reduce((ac,el,ind)=> ac + (+el * goodPts[ind]),0) 
    let evilScore = evil.split(' ').reduce((ac,el,ind)=> ac + (+el * evilPts[ind]),0)
    return goodScore > evilScore ? 'Battle Result: Good triumphs over Evil' : goodScore === evilScore ? 'Battle Result: No victor on this battle field' : 'Battle Result: Evil eradicates all trace of Good'
    }

    // Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

    // Note that the number will always be non-negative (>= 0).
    function insertDash(num) {
        return num.toString().split('').map((x,i,arr)=> +x % 2 === 1 && +arr[i+1] % 2===1 ? x + "-" : x).join('')
     }

    //  Implement a function that returns the minimal and the maximal value of a list (in this order).
    function getMinMax(arr){
        return [Math.min(...arr),Math.max(...arr)];
      };    