import students from "../data/students.js";

export const filterHighGrade = (students) => {
    let highGradeStudents = [];
  
    students.forEach(student => {
      if (student.grade > 80) {
        highGradeStudents.push(student);
      }
    });
  
    highGradeStudents.sort((a, b) => b.grade - a.grade);
  
    return highGradeStudents;
  }

  console.log(filterHighGrade(students));


 