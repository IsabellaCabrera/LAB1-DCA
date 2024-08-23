import  students from "../data/students.js";  

export const alphOrder = (students) => {
    return students.sort ((a, b) => {
        if (a.name > b.name) {
            return 1;
        } 
        else if (a.name < b.name) {
            return -1;
        }
        return 0;
    });

}

console.log(alphOrder (students));




