
import { renderStudent } from "./utils/renderStudents.js";
import { alphOrder} from "./utils/orderByName.js";
import { organizeByCourse } from "./utils/organizeByCourse.js";
import { filterHighGrade} from "./utils/filterHighGrade.js";
import { averageGrade } from "./utils/calculateMeanGrade.js";
import students from "./data/students.js";

const container = document.querySelector('.app');

//se crean las etiquetas

const studentsOrderByName = alphOrder(students);
const filterGrade = filterHighGrade(students);
const mediaGrade = averageGrade(students);
const studentCourses = organizeByCourse(students);

//lista de estudiantes 
const principalTitle = document.createElement('h1');
principalTitle.textContent = 'List of students';
principalTitle.classList.add('list-alpha');  // creando la clase para css
container.appendChild(principalTitle);

const orderStudentsContainer = document.createElement('ul');
orderStudentsContainer.classList.add('name-list');// creando la clase para css

studentsOrderByName.forEach((student)=>{
    const listElement = document.createElement('li');
    listElement.textContent = `Name: ${student.name}`;
    
    orderStudentsContainer.appendChild(listElement);
});

container.appendChild(orderStudentsContainer);

//lista de los estudiantes >80 
const averageTitle = document.createElement('h1');
averageTitle.textContent = 'Best grades';
averageTitle.classList.add('best-grades-title');// Agregar clase al título de mejores notas
container.appendChild(averageTitle);


const studentsHighNotes = document.createElement('ul');
studentsHighNotes.classList.add('grades-list');
filterGrade.forEach((student)=>{
    const listNotes = document.createElement('li');
    listNotes.textContent = `Name: ${student.name} Grade: ${student.grade}`;
    
    studentsHighNotes.appendChild(listNotes);
});

container.appendChild(studentsHighNotes);

//promedio de estudiantes

const meanGradeContainer = document.createElement('div');
meanGradeContainer.textContent = `Mean Grade: ${mediaGrade}`;
meanGradeContainer.classList.add('mean-grade-container');  // Agregar clase al contenedor de la media de notas
container.appendChild(meanGradeContainer);

// estudiantes por cursos

Object.keys(studentCourses ).forEach((course) => {
    const courseTitle = document.createElement('h2');
    courseTitle.textContent = course;
    courseTitle.classList.add('course-title');  // Agregar clase al título del curso
    container.appendChild(courseTitle);

    const containerByCourse = document.createElement('div');
    containerByCourse.classList.add('course-container');  // Agregar clase al contenedor del curso


    studentCourses [course].forEach((student) => {
        const studentFigure = renderStudent(student);
        studentFigure.classList.add('student-figure');  // Agregar clase a la figura del estudiante
        containerByCourse.appendChild(studentFigure);
    });

    container.appendChild(containerByCourse);
})
