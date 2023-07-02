const yoghurt = 15.678;
const flour = 123.965;
const oil = 90.2345;
const maxPrice = Math.max(yoghurt, flour, oil);
console.log("max price ", maxPrice);
const minPrice = Math.min(yoghurt, flour, oil);
console.log("min price ", minPrice);
const sum = yoghurt + flour + oil;
console.log("sum ", sum);
const sumOfIntegers = Math.floor(yoghurt) + Math.floor(flour) + Math.floor(oil);
console.log("sum of integers ", sumOfIntegers);
const roundedSumToHundreds = Math.round(sum / 100) * 100;
console.log("rounded sum to hundreds ", roundedSumToHundreds);
const evenSum = Math.floor(sum) % 2 === 0;
console.log("even sum ", evenSum);
const change = 500 - sum;
console.log("change ", change);
const averagePrice = (sum / 3).toFixed(2);
console.log("average price ", averagePrice);
const discount = Math.floor(80 - 10 + Math.random() + 10) / 100;
console.log("discount", discount);
const discountedPrice = (sum - sum * discount).toFixed(2);
console.log("discounted price ", discountedPrice);
const netProfit = Math.floor(sum / 2 - sum * discount);
console.log("net profit ", netProfit);
const result = `Максимальна ціна: ${maxPrice} Мінімальна ціна: ${minPrice} Вартість всіх товарів: ${sum} Вартість всіх товарів без копійок: ${sumOfIntegers} Сума товарів, округлена до сотень: ${roundedSumToHundreds} 
Чи є сума парним числом: ${evenSum} Решта:${change} Середнє значення цін: ${averagePrice} Знижка: ${
  discount * 100
} % Ціна зі знижкою: ${discountedPrice} Чистий прибуток: ${netProfit}`;
console.log(result);
