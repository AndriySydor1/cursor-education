let N = Number(prompt("Введіть число N"));
while (!Number.isInteger(N)) {
  N = Number(prompt("Повторно введіть значення числа N"));
}
let M = Number(prompt("Введіть число M"));
while (!Number.isInteger(M) || M < N) {
  M = Number(prompt("Повторно введіть значення числа M"));
}
let missEven = confirm("Чи потрібно пропускати парні числа?");
let sum = 0;
for (let i = N; i <= M; i++) {
  if (missEven) {
    if (i % 2 === 1) {
      sum += i;
    }
  } else {
    sum += i;
  }
}
document.writeln(
  `Число N: ${N} <br>
    Число M: ${M} <br>
    Чи пропускаємо парні числа? ${missEven} <br>
    Сума: ${sum}
    `
);
