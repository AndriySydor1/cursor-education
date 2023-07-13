function achieveSection() {
  const jar = document.createElement("div");
  jar.style.display = "flex";
  jar.style.flexWrap = "wrap";
  jar.style.width = "250px";
  jar.style.height = "250px";
  document.body.appendChild(jar);

  for (let i = 0; i < 25; i++) {
    const quadrate = document.createElement("div");
    quadrate.style.width = "50px";
    quadrate.style.height = "50px";
    quadrate.style.backgroundColor = arbitraryPaint();
    jar.appendChild(quadrate);
  }
}

function arbitraryPaint() {
  const characters = "0123456789ABCDEF";
  let hue = "#";
  for (let i = 0; i < 6; i++) {
    hue += characters[Math.floor(Math.random() * 16)];
  }
  return hue;
}

function causeChunksHiatus() {
  setInterval(() => {
    const squares = document.querySelectorAll("div");
    squares.forEach((square) => {
      square.style.backgroundColor = arbitraryPaint();
    });
  }, 1000);
}

achieveSection();
causeChunksHiatus();
