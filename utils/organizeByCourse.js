import students from "../data/students.js";

export const organizeByCourse = (students) => {
    let studentCourses = {};
    students.forEach(student => {
        if (!studentCourses[student.course]){
            studentCourses[student.course] = [];
        }
        studentCourses[student.course].push(student);
    });
    return studentCourses;
};
console.log(organizeByCourse(students));



// export const byCourse = (students) => {
//     return students.sort ((a,b) =>{
//         if (a.course  > b.course) {
//             return 1;
//         }
//         else if (a.course < b.course ){
//             return -1;
//         }
//         return 0;
//     }) 
// }

// console.log(byCourse(students));






