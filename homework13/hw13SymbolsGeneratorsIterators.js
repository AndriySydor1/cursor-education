function* createIdGenerator() {
  let i = 1;

  while (i > 0) yield i++;
}

const idGenerator = createIdGenerator();

setInterval(() => {
  console.log(`Identifier generator  ${idGenerator.next().value}`);
}, 1000);
document.writeln(`Open the console`);

function* newFontGenerator(upOrDown) {
  while (1 > 0) {
    let size = yield upOrDown;

    if (size === "up" && upOrDown >= 0) {
      upOrDown = upOrDown + 2;
    } else if (size === "down" && upOrDown >= 0) {
      upOrDown = upOrDown - 2;
    }
  }
}

const fontGenerator = newFontGenerator(14);
let reSize = document.getElementById("title");

setTimeout(() => {
  reSize.style.fontSize = `${fontGenerator.next("up").value}px`;
}, 2000);
setTimeout(() => {
  reSize.style.fontSize = `${fontGenerator.next("up").value}px`;
}, 4000);
setTimeout(() => {
  reSize.style.fontSize = `${fontGenerator.next("up").value}px`;
}, 6000);
setTimeout(() => {
  reSize.style.fontSize = `${fontGenerator.next("up").value}px`;
}, 8000);
setTimeout(() => {
  reSize.style.fontSize = `${fontGenerator.next("up").value}px`;
}, 10000);
setTimeout(() => {
  reSize.style.fontSize = `${fontGenerator.next("up").value}px`;
}, 1200);
setTimeout(() => {
  reSize.style.fontSize = `${fontGenerator.next("up").value}px`;
}, 1400);
