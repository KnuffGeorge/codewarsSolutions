// Count how often sign changes in array.
// result

// number from 0 to ... . Empty array returns 0
// example

// const arr = [1, -3, -4, 0, 5];

// /*
// | elem | count |
// |------|-------|
// |  1   |  0    |
// | -3   |  1    |
// | -4   |  1    |
// |  0   |  2    |
// |  5   |  2    |
// */

// catchSignChange(arr) == 2;

const catchSignChange = arr => {
    let changes = 0
    arr.forEach((x,i,ar) => (x < 0 && arr[i+1] >=0 || x >= 0 && arr[i+1]<0) ? changes++ : null)
    return changes
  }

//   Learning to code around your full time job is taking over your life. You realise that in order to make significant steps quickly, it would help to go to a coding bootcamp in London.

// Problem is, many of them cost a fortune, and those that don't still involve a significant amount of time off work - who will pay your mortgage?!

// To offset this risk, you decide that rather than leaving work totally, you will request a sabbatical so that you can go back to work post bootcamp and be paid while you look for your next role.

// You need to approach your boss. Her decision will be based on three parameters:

// val = your value to the organisation
// happiness = her happiness level at the time of asking and finally
// The numbers of letters from 'sabbatical' that are present in string s.

// Note that if s contains three instances of the letter 'l', that still scores three points, even though there is only one in the word sabbatical.

// If the sum of the three parameters (as described above) is > 22, return 'Sabbatical! Boom!', else return 'Back to your desk, boy.'.

function sabb(s, val, happiness){
    return [...s].filter(x=> "sabticl".includes(x)).length + val + happiness > 22 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.'
    }
