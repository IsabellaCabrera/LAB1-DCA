import students from "../data/students.js";

 export const averageGrade = (students) => {
    let sumTotal = 0;
    students.forEach(student => sumTotal = sumTotal + student.grade);

    return sumTotal / students.length
}

averageGrade (students)
console.log(averageGrade(students))