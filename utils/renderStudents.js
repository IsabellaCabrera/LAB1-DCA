export const renderStudent = ({id,name,age,course,grade}) => {

    const container = document.createElement('figure');
    container.classList.add("student-card");

    const h3id = document.createElement('h3')
    const h2name = document.createElement ('h2')
    const h2age = document.createElement('h2')
    const h2course = document.createElement('h2')
    const h2grade = document.createElement('h2')

    h3id.textContent = id;
    h2name.textContent = name;
    h2age.textContent = age;
    h2course.textContent = course;
    h2grade.textContent = grade;


    container.appendChild(h3id);
    container.appendChild(h2name);
    container.appendChild(h2age);
    container.appendChild(h2course);
    container.appendChild(h2grade);


    return container;
}



