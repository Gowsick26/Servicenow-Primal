var student = {
    name: "",
    age: 0,
    grade: "",
    displayInfo: function() {
      console.log("Name: " + this.name);
      console.log("Age: " + this.age);
      console.log("Grade: " + this.grade);
    }
  };
  student.name = prompt("Enter the student's name:");
  student.age = parseInt(prompt("Enter the student's age:"));
  student.grade = prompt("Enter the student's grade:");
  student.displayInfo();
  