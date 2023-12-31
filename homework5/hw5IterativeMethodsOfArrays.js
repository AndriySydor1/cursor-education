const getDividedByFive = (...numbers) => {
  return numbers.filter((item) => item % 5 === 0);
};
const values1 = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
console.log(
  `Function getDividedByFive filters out all the elements in the array and leave only those which are divisible by 5\n ${values1}\n result - `,
  getDividedByFive(...values1)
);
const divideByThree = (word) => {
  if (word.length <= 3) return word;

  let result = [];

  word = word.replaceAll(" ", "").toLowerCase();

  for (let i = 0; i < word.length; i = i + 3) {
    result.push(word.slice(i, i + 3));
  }
  return result;
};
console.log(
  "Function divideByThree breaks each word into conditional syllables of 3 letters\n",
  divideByThree("Commander")
);
const getRandomArray = (length, min, max) => {
  console.log("length = ", length);
  console.log("min = ", min);
  console.log("max = ", max);

  let resultArr = [];

  for (let i = 0; i < length; i++) {
    resultArr.push(Math.floor(Math.random() * (max - min + 1) + min));
  }
  return resultArr;
};
console.log(
  `Function getRandomArray returns an array of random integers\n result - `,
  getRandomArray(10, 1, 10)
);
const getMedian = (...numbers) => {
  let median = 0;
  let medianIndex = 0;
  numbers = numbers.filter(Number.isInteger);
  numbers.sort((a, b) => a - b);
  if (numbers.length % 2 === 0) {
    medianIndex = numbers.length / 2;
    median = (numbers[medianIndex - 1] + numbers[medianIndex]) / 2;
  } else {
    medianIndex = Math.floor(numbers.length / 2);
    median = numbers[medianIndex];
  }
  return median;
};
const values2 = [1, 2, 3, 4, 5];
console.log(
  `Function getMedian calculates the median of all arguments passed to it\n ${values2}\n result - `,
  getMedian(...values2)
);
const getAverage = (...numbers) => {
  numbers = numbers.filter(Number.isInteger);
  return (
    numbers.reduce((accum, currentValue) => accum + currentValue) /
    numbers.length
  );
};
const values3 = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
console.log(
  `Function getAverage calculates the arithmetic average of all arguments passed to it\n ${values3}\n result - `,
  getAverage(...values3)
);
const countPositiveNumbers = (...numbers) => {
  return numbers.filter((item) => item > 0).length;
};
const values4 = [1, -2, 3, -4, -5, 6];
console.log(
  `Function countPositiveNumbers counts the quantity of positive numbers\n ${values4}\n result - `,
  countPositiveNumbers(...values4)
);
