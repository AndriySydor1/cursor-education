const getMaxDigit = () => {
  const number = prompt("Функція 1. Введіть число");
  const arrOfNumbers = number.split("").map(Number);

  return Math.max(...arrOfNumbers);
};
const pow = () => {
  const base = +prompt("Функція 2. Введіть число для визначення ступеня числа");
  const exponent = +prompt("Функція 2. Введіть ступінь числа");
  if (exponent === 0) return 1;
  if (exponent === 1) return base;
  let number = base;

  for (let i = 1; i < exponent; i++) {
    number = number * base;
  }
  return number;
};
const formatName = () => {
  const name = prompt("Функція 3. Введіть ім'я");
  const firstLetter = name.substring(0, 1).toLowerCase();

  return name
    .toLowerCase()
    .replace(firstLetter, (subStr) => subStr.toUpperCase());
};
const salary = () => {
  let salary = 0;
  let tax = 0;
  do {
    salary = +prompt("Функція 4. Введіть сумму зарплатні");
  } while (isNaN(salary) || !salary);
  do {
    tax = +prompt("Функція 4. Введіть сумму податку");
  } while (isNaN(tax) || !tax);
  return salary - (salary * tax) / 100;
};
const getRandomNumber = () => {
  let min = 0;
  let max = 0;

  do {
    min = +prompt("Функція 5. Введіть число - початок діапазону");
  } while (isNaN(min) || !min);

  do {
    max = +prompt("Функція 5. Введіть число - кінець діапазону");
  } while (isNaN(max) || !max);
  return Math.floor(Math.random() * (max - min) + min);
};
const countLetter = () => {
  const letter = prompt("Функція 6. Введіть літеру");
  const word = prompt("Функція 6. Введіть слово");

  return word
    .toLowerCase()
    .split("")
    .filter((el) => el.includes(letter.toLowerCase())).length;
};
const convertCurrency = () => {
  const money = prompt(`Функція 7. Вкажіть суму зі знаком валюти $ або UAH`);
  const currency = money.match(/UAH|\$/gi) ? money.match(/UAH|\$/gi)[0] : "";

  if (!currency) return "Введіть коректну валюту";

  if (currency === "$") return Math.round(money.slice(0, -1) * 37) + "грн.";
  if (currency === "UAH" || "uah")
    return Math.round(money.slice(0, -3) / 37) + "$";
};
const getRandomPassword = () => {
  const length = prompt(
    `Функція 9. Введіть кількість символів для генерації паролю`,
    "8"
  );
  let password = "";

  for (let i = 0; i < +length; i++) {
    password += Math.floor(Math.random() * 9);
  }
  return password;
};
const deleteLetters = () => {
  const letter = prompt("Функція 10. Введіть літеру");
  const statement = prompt("Функція 10. Введіть речення");
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
    "Функція 12. Введіть речення для видалення букв які зустрічаються більше одного разу"
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
    Функція #1: ${getMaxDigit()}<br>
    Функція #2: ${pow()}<br>
    Функція #3: ${formatName()}<br>
    Функція #4: ${salary()}<br>
    Функція #5: ${getRandomNumber()}<br>
    Функція #6: ${countLetter()}<br>
    Функція #7-8: ${convertCurrency()}<br>
    Функція #9: ${getRandomPassword()}<br>
    Функція #10: ${deleteLetters()}<br>
    Функція #11: ${isPalyndrom()}<br>
    Функція #12: ${deleteDuplicateLetter()}<br>
`);
