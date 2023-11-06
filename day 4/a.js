// class animal{
//     speak(){
//         console.log("bow bow")
//     }
// }
// class dog extends animal{
//     constructor(name,age){
//         super();
//         this.name= name
//         this.age =age
//     }
//     speak(){
//         console.log("barks")
//     }
//     getName(){
//         return this.name
//     }
// }
// let d1=new dog("ab",10)
// console.log(d1,getName())
// d1.speak()

const students = [
    { name: "Student 1", age: 10 },
    { name: "Student 2", age: 15 },
    { name: "Student 3", age: 20 },
    { name: "Student 4", age: 25 },
    { name: "Student 5", age: 30 },
  ];
  const filteredStudents = students.filter(student => student.age >= 20);

  console.log(filteredStudents);