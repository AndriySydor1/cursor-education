let N = Number(prompt("Введіть число N", ""));
if (Number.isInteger(N)) {
  console.log("Число N ціле:", N, true);
} else if (isNaN(N) || !Number.isInteger(N)) {
  N = prompt("Повторно введіть значення числа N.", "");
}
let M = Number(prompt("Введіть число M", ""));
if (isNaN(M) || M < N || !Number.isInteger(M)) {
  M = prompt("Повторно введіть значення числа M.");
}
if (Math.trunc(M) === M) {
  console.log("Число M ціле:", M, true);
}
let access = confirm("Чи потрібно пропускати парні числа?");
switch (access) {
  case true:
    {
      console.log("Пропускаємо парні числа.");
    }
    break;
  case false: {
    console.log("Не пропускаємо парні числа.");
  }
}
let sum = 0;
for (let i = N; i <= M; i++) {
  if (access == false) {
    sum = sum + i;
  } else if (access == true && i % 2 == 1) {
    sum = sum + i;
  }
}
console.log("Сума чисел від N до M:", sum);
alert(sum);
