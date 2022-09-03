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