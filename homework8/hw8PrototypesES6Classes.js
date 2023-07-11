class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = [];
    this.dismissed = false;
  }
  getAverageMark() {
    if (this.dismissed) {
      console.log(
        "It is impossible to view the average score of the expelled student"
      );
      return null;
    }

    return (
      this.marks.reduce((sum, current) => sum + current) / this.marks.length
    );
  }
  recover() {
    this.dismissed = false;
    console.log("The student is renewed");
  }
  getInfo() {
    return this.course + " " + this.university + " " + this.fullName;
  }

  set mark(val) {
    if (this.dismissed) return;

    if (val > 0 && !this.dismissed) this.marks.push(val);
  }

  get getMarks() {
    if (this.dismissed) {
      console.log(
        "It is impossible to view the grades of the expelled student"
      );
      return null;
    }

    return this.marks;
  }

  dismiss() {
    this.dismissed = true;
    console.log("The student is expelled");
  }
}

const student = new Student(
  "Вищої Школи Психотерапії м.Одеса",
  "Студент 1го курсу",
  "Остап Родоманський Бендер"
);
console.log(student.getInfo());
student.marks = [5, 4, 4, 5];
console.log("The student's scores ", student.marks);
console.log("We give the student an assessment", (student.mark = 5));
console.log("The student's scores ", student.marks);
console.log("The student's average score - ", student.getAverageMark());
student.dismiss();
console.log("We give the student an assessment", (student.mark = 3));
console.log("Scholar scores - ", student.getMarks);
student.recover();
console.log(
  "We give the student an assessment after renewal ",
  (student.mark = 3)
);
console.log("Scholar scores - ", student.getMarks);
console.log("------------------------------------------");

class BudgetStudent extends Student {
  constructor(university, course, fullName) {
    super(university, course, fullName);
    this.scholarship = null;
    setInterval(() => this.getScholarship(1400), 30000);
  }

  getScholarship(val) {
    if (this.dismissed) {
      console.log("The student was expelled");
      return;
    }
    if (this.getAverageMark() < 4) {
      console.log(
        "The student's average score is less than 4, he is not entitled to a scholarship"
      );
    } else {
      this.scholarship = val;
      console.log(`You received ${val} UAH scholarship`);
    }
  }
}

const budgetStudent = new BudgetStudent(
  "of Odesa Higher School of Psychotherapy",
  "3rd year budgeting student",
  "Taras Andriyovych Sydor"
);
console.log("\nA budget student has been created");
console.log(budgetStudent.getInfo());
budgetStudent.marks = [5, 4, 3, 5];
console.log("The student's scores ", budgetStudent.marks);
console.log("The student is tried to be issued a scholarship");
budgetStudent.getScholarship(1400);
budgetStudent.marks = [5, 4, 3, 3];
console.log("The student's grades were changed", budgetStudent.marks);
console.log("The student is tried to be issued a scholarship");
budgetStudent.getScholarship(1400);
budgetStudent.dismiss();
console.log("The expelled student is tried to be issued a scholarship");
budgetStudent.getScholarship(1400);
