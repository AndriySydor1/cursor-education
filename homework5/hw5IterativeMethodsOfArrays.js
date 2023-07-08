/* 7. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи
в масиві та залишить тільки ті, які діляться на ціло на 5
Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]*/

const getDividedByFive = (...numbers) => {
  return numbers.filter((item) => item % 5 === 0);
};
const values1 = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
console.log(
  `Function getDividedByFive filters out all the elements in the array and leave only those which are divisible by 5\n ${values1}\n result - `,
  getDividedByFive(...values1)
);
/*9. Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні
склади по 3 букви. Якщо букв менше трьох – не розбиває. Пробіли завжди
видаляються. Рядок приводится до нижнього регістру.
    Приклад: divideByThree("Commander) -> ["com", "man", "der"]
Приклад: divideByThree("live") -> ["liv", "e"]*/

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
  "Function divideByThree розбиває кожне слово на умовні склади по 3 букви\n",
  divideByThree("Commander")
);
/* 1.Створіть функцію getRandomArray(length, min, max) – яка
повертає масив випадкових цілих чисел. У функції є параметри: length -
довжина масиву, min – мінімальне значення цілого числа, max – максимальне
значення цілого числа.
    Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3,2]*/

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
console.log(
  `Function getAverage calculates the arithmetic average of all arguments passed to it\n ${numbers}\n result - `,
  getAverage(...numbers)
);
const countPositiveNumbers = (...numbers) => {
  return numbers.filter((item) => item > 0).length;
};
const values3 = [1, -2, 3, -4, -5, 6];
console.log(
  `Function countPositiveNumbers counts the quantity of positive numbers\n ${values3}\n result - `,
  countPositiveNumbers(...values3)
);
