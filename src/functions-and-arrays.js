// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers() {
  let a = prompt("enter the first number");
  let b = prompt("enter the second number");
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return null;
  }
}


// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
var lgth = 0;
var longest;

for (var i = 0; i < words.length; i++) {
  if (arr[i].length > lgth) {
    var lgth = words[i].length;
    longest = words[i];
  }
}

alert(longest);

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

var sum = 0;

for (var i = 0; i < numbers.length; i++) {

  sum += numbers[i]

}

console.log(sum);

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
var sum = 0;
var avg = 0;

for (var i = 0; i < numbersAvg.length; i++) {

  sum += numbers[i]

}
avg = sum / numbersAvg.length;
console.log(avg);




// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr) {
  var avg = 0;
  var len = 0;
  for (var i = 0; i < wordsArr.length; i++) {
    len += wordsArr[i].length;
  }
  avg = len / wordsArr.length;
  if (wordsArr.length === 0) {
    return null;
  } else {
    return avg;
  }

}


// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];



// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function findElement(wordsFind, wordtoSearch) {
  var lenth = wordsFind.length;
  var isAvailable = false;
  for (var i = 0; i < lenth; i++) {
    if (wordsFind[i] === wordtoSearch) {
      isAvailable = true;
    }
  }
  if (lenth === 0) {
    return null;
  } else if (isAvailable === true) {
    return true
  } else if (isAvailable === false) {
    return wordsFind;
  }

}


// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];


// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];