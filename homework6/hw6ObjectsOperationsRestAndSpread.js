const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

// Розподіляємо студент і предмети
function getSubjects(student) {
  const clues = Object.keys(student.subjects);
  const topics = clues.map((subject) => {
    return subject.charAt(0).toUpperCase() + subject.slice(1).replace("_", " ");
  });
  return topics;
}

const hosteler = students[0];
const disciplines = getSubjects(hosteler);
console.log("Список предметів:", disciplines);

// Середня оцінка студента
function getAverageMark(student) {
  const estimates = Object.values(student.subjects).flat();
  const estimations = estimates.reduce((sum, mark) => sum + mark, 0);
  const valuation = estimations / estimates.length;
  return {
    average: valuation.toFixed(2),
  };
}

const colleger = students[0];
const valuation = getAverageMark(colleger);
console.log("Середня оцінка студента:", valuation);

// Інформація про студента
function getStudentInfo(student) {
  const scholar = {
    course: student.course,
    name: student.name,
    averageMark: getAverageMark(student),
  };

  return scholar;
}
const tutee = students[0];
const trainee = getStudentInfo(tutee);
console.log("Інфоримація про студента:", trainee);

// Імена студентів
function getStudentsNames(students) {
  const denominations = students.map((student) => student.name);
  denominations.sort();
  return denominations;
}
const designations = getStudentsNames(students);
console.log("Імена в алфавітному порядку:", designations);

// Найкращий студент
function getBestStudent(students) {
  let excellent = null;
  let appreciation = 0;

  for (let i = 0; i < students.length; i++) {
    const medianScore = getAverageMark(students[i]).average;

    if (medianScore > appreciation) {
      appreciation = medianScore;
      excellent = students[i].name;
    }
  }
  return excellent;
}
const excellent = getBestStudent(students);
console.log("Найкращий студент -", excellent);

// Рахуємо кількість букв у слові
function calculateWordLetters() {
  let word = prompt("Введіть слово для перевірки");
  while (!word || word.trim() === "" || !isNaN(word)) {
    word = prompt("Помилка! Введене слово - некоректне");
  }

  const characters = {};

  for (let i = 0; i < word.length; i++) {
    const character = word[i].toLowerCase();

    if (character !== " ") {
      if (characters.hasOwnProperty(character)) {
        characters[character]++;
      } else {
        characters[character] = 1;
      }
    }
  }
  return characters;
}

const symbols = calculateWordLetters();
document.writeln("Розбір вашого слова {");
for (const character in symbols) {
  document.writeln(`"${character}": ${symbols[character]},`);
}
document.writeln("}");
