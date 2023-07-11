const getMaxDigit = () => {
  const number = prompt("Function 1. Введіть число");
  const arrOfNumbers = number.split("").map(Number);
  return Math.max(...arrOfNumbers);
};
const pow = () => {
  const base = +prompt("Function 2. Введіть основу степеня");
  const exp = +prompt("Function 2. Введіть степінь");
  if (exp === 0) return 1;
  if (exp === 1) return base;
  let number = base;
  for (let i = 1; i < exp; i++) {
    number = number * base;
  }
  return number;
};
const formatName = () => {
  const name = prompt("Function 3. Введіть ім'я");
  const firstLetter = name.substring(0, 1).toLowerCase();
  return name
    .toLowerCase()
    .replace(firstLetter, (subStr) => subStr.toUpperCase());
};
const salary = () => {
  let salary = 0;
  let tax = 0;
  do {
    salary = +prompt("Function 4. Введіть суму зарплати");
  } while (isNaN(salary) || !salary);
  do {
    tax = +prompt("Function 4. Введіть суму податку");
  } while (isNaN(tax) || !tax);
  return salary - (salary * tax) / 100;
};
const getRandomNumber = () => {
  let min = 0;
  let max = 0;
  do {
    min = +prompt("Function 5. Введіть число - початок інтервалу");
  } while (isNaN(min) || !min);
  do {
    max = +prompt("Function 5. Введіть число - кінець інтервалу");
  } while (isNaN(max) || !max);
  return Math.floor(Math.random() * (max - min) + min);
};
const countLetter = () => {
  const letter = prompt("Function 6. Введіть букву");
  const word = prompt("Function 6. Введіть слово");
  return word
    .toLowerCase()
    .split("")
    .filter((el) => el.includes(letter.toLowerCase())).length;
};
const convertCurrency = () => {
  const money = prompt(`Function 7. Введіть суму зі знаком валюти $ або UAH`);
  const currency = money.match(/UAH|\$/gi) ? money.match(/UAH|\$/gi)[0] : "";
  if (!currency) return "Введіть коректну валюту";
  if (currency === "$") return Math.round(money.slice(0, -1) * 37) + "грн.";
  if (currency === "UAH" || currency === "uah")
    return Math.round(money.slice(0, -3) / 37) + "$";
};
const getRandomPassword = () => {
  const length = prompt(
    `Function 9. Введіть кількість символів для пароля`,
    "8"
  );
  let password = "";
  for (let i = 0; i < +length; i++) {
    password += Math.floor(Math.random() * 9);
  }
  return password;
};
const deleteLetters = () => {
  const letter = prompt("Function 10. Введіть букву");
  const statement = prompt("Function 10. Введіть речення");
  const re = new RegExp(letter, "ig");
  return statement.replace(re, "");
};
const isPalyndrom = () => {
  const str = prompt("Функція 11. Введіть слово або речення");
  const strVar = str.replace(/\s/g, "").toLowerCase();
  const len = strVar.length;
  for (let i = 0; i < len / 2; i++) {
    if (strVar[i] !== strVar[len - 1 - i]) return false;
  }
  return true;
};
const deleteDuplicateLetter = () => {
  const str = prompt(
    "Function 12. Введіть речення для видалення букв, що повторюються"
  );
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let re = new RegExp(str[i], "ig");
    if (str.match(re).length === 1) {
      result += str[i];
    }
  }
  return result;
};
document.writeln(`
    Function 1: ${getMaxDigit()}<br>
    Function 2: ${pow()}<br>
    Function 3: ${formatName()}<br>
    Function 4: ${salary()}<br>
    Function 5: ${getRandomNumber()}<br>
    Function 6: ${countLetter()}<br>
    Function 7: ${convertCurrency()}<br>
    Function 9: ${getRandomPassword()}<br>
    Function 10: ${deleteLetters()}<br>
    Function 11: ${isPalyndrom()}<br>
    Function 12: ${deleteDuplicateLetter()}<br>
`);
