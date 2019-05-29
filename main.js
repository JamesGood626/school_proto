window.onload = () => {
  const students = document.getElementById("students");
  const studentsInput = document.getElementById("student-input");
  const studentCreateButton = document.getElementById("student-create-btn");
  const studentDeleteButton = document.getElementById("student-delete-btn");

  const lessons = document.getElementById("lessons");
  const lessonsInput = document.getElementById("lesson-input");
  const lessonCreateButton = document.getElementById("lesson-create-btn");
  const lessonDeleteButton = document.getElementById("lesson-delete-btn");

  new Controller(
    "student",
    students,
    studentsInput,
    studentCreateButton,
    studentDeleteButton
  );
  new Controller(
    "lesson",
    lessons,
    lessonsInput,
    lessonCreateButton,
    lessonDeleteButton
  );
};

function Controller(
  name,
  htmlUnorderedList,
  input,
  createButton,
  deleteButton
) {
  this.name = name;
  this.htmlUnorderedList = htmlUnorderedList;
  this.input = input;
  this.createButton = createButton;
  this.deleteButton = deleteButton;
  this.deleteMode = false;

  this.createButton.addEventListener("click", e => {
    const inputValue = this.input.value;
    const valid = this.validateValidLength(inputValue);
    if (valid) {
      this.appendToUnorderedList(inputValue);
      // reset input
      this.input.value = "";
      return;
    }
    //   this.showError()
  });

  this.deleteButton.addEventListener("click", e => {
    this.toggleDelete();
  });

  this.htmlUnorderedList.addEventListener("click", e => {
    if (this.deleteMode) {
      e.target.remove();
    }
  });
}

Controller.prototype.validateValidLength = value => value.length >= 3;

Controller.prototype.appendToUnorderedList = function(value) {
  const index = this.htmlUnorderedList.childNodes.length;
  let li = document.createElement("li");
  li.id = `${this.name}-${index}`;
  li.classList = `${this.name}`;
  li.innerText = value;
  this.htmlUnorderedList.appendChild(li);
};

Controller.prototype.toggleDelete = function() {
  this.deleteMode = !this.deleteMode;
};

// function Controller(studentController, lessonController) {
//   this.studentController = studentController;
//   this.lessonController = lessonController;
// }

// function StudentController(studentContainer) {
//     this.studentContainer = studentContainer
// }

// StudentController.prototype.

// function LessonController(lessonContainer) {
//     this.lessonContainer = lessonContainer
// }
