const Ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const Latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const Litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

/*1. Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує
скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна
викликатись через call та працювати з даними через this*/

function getMyTaxes(salary) {
  return this.tax * salary;
}

let salary = Number(prompt("Enter the amount of salary"));
const UkrCost = getMyTaxes.call(Ukraine, salary);
const LatCost = getMyTaxes.call(Latvia, salary);
const LitCost = getMyTaxes.call(Litva, salary);

document.writeln(
  `You will pay ${UkrCost} in Ukraine, ${LatCost} in Latvia, ${LitCost} in Litva <br>`
);
/**
 * 2. Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує
скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax *
middleSalary). Функція повинна викликатись через call та працювати з даними
через this
 */

function getMiddleTaxes(country) {
  const averageTariff =
    Math.round(Number(this.tax) * Number(this.middleSalary) * 100) / 100;
  return averageTariff;
}
console.log(
  `IT specialists in Ukraine pay on average`,
  getMiddleTaxes.call(Ukraine)
);
console.log(
  `IT specialists in Latvia pay on average`,
  getMiddleTaxes.call(Latvia)
);
console.log(
  `IT specialists in Litva pay on average`,
  getMiddleTaxes.call(Litva)
);

/*3. Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки
всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary *
vacancies). Функція повинна викликатись через call та працювати з даними
через this
*/
function getTotalTaxes(country) {
  const calculatedTotalTax =
    Math.round(
      Number(this.tax) *
        Number(this.middleSalary) *
        Number(this.vacancies) *
        100
    ) / 100;
  return calculatedTotalTax;
}

console.log(
  `IT specialists in Ukraine generally pay`,
  getTotalTaxes.call(Ukraine)
);
console.log(
  `IT specialists in Latvia generally pay`,
  getTotalTaxes.call(Latvia)
);
console.log(`IT specialists in Litva generally pay`, getTotalTaxes.call(Litva));

/*4. Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт
виду: { salary: number, taxes: number, profit: number } кожні 10 секунд.
Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes –
розраховується в залежності від вибраної країни та значення salary.
profit = salary - taxes;
для виводу в консоль кожні 10 секунд використайте setInterval*/

function getMySalary(country) {
  let minSalary = 1500;
  let maxSalary = 2000;
  let casualSalary =
    Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
  const calculated = {
    salary: casualSalary,
    taxes: Math.round(casualSalary * country.tax * 100) / 100,
    profit: casualSalary - Math.round(casualSalary * country.tax * 100) / 100,
  };

  return console.log(`In our country `, calculated);
}

document.writeln(`Move to the console <br>`);
let timerShow = setInterval(() => getMySalary(Ukraine), 10000);
