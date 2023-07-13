document.addEventListener("keydown", caseClavier);
function caseClavier(event) {
  if (noises.includes(event.code)) {
    let audio = new Audio(`sounds/${event.code}.wav`);
    audio.play();
  }
}
const noises = [
  "KeyC",
  "KeyU",
  "KeyR",
  "KeyS",
  "KeyO",
  "KeyF",
  "KeyO",
  "KeyN",
  "KeyT",
  "KeyE",
  "KeyN",
  "KeyD",
  "KeyJ",
  "KeyA",
  "KeyV",
  "KeyI",
  "KeyP",
  "KeyG",
  "KeyH",
  "KeyK",
  "KeyL",
  "KeyM",
  "KeyQ",
  "KeyW",
  "KeyX",
  "KeyY",
  "KeyZ",
];
const knobs = document.querySelectorAll("button");
knobs.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (noises.includes(event.target.id)) {
      let audio = new Audio(`sounds/${event.target.id}.wav`);
      audio.play();
    }
  });
});
