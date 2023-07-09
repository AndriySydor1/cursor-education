function achieveSections() {
  const assembly = document.getElementsByClassName("wrapper");
  Array.from(assembly).forEach((item) => item.remove());

  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  document.body.appendChild(wrapper);

  const quadrate = document.createElement("div");
  quadrate.classList.add("square");

  for (let i = 0; i < 25; i++) {
    let freshItem = quadrate.cloneNode(true);
    freshItem.style.backgroundColor = arbitraryPaint();
    wrapper.insertAdjacentElement("beforeend", freshItem);
  }
}
const causedChunksHiatus = () => {
  setInterval(achieveSections, 2000);
};
causedChunksHiatus();
function arbitraryPaint() {
  const characters = "0123456789ABCDEF";
  let hue = "#";
  for (let i = 0; i < 6; i++) {
    hue += characters[Math.floor(Math.random() * 16)];
  }
  return hue;
}
