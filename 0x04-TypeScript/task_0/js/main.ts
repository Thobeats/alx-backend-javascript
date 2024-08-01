export interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}


const studentOne: Student = {
    firstName: 'Jon',
    lastName: 'Snow',
    age: 40,
    location: 'England'
}

const studentTwo: Student = {
    firstName: 'Snow',
    lastName: 'White',
    age: 20,
    location: 'Cuba'
}

const studentList: Array<Student> = [
    studentOne,
    studentTwo
]

export const showTable = (studentList: Array<Student>): void => {
    const table = document.createElement('table');
    const tableHead = document.createElement('tr');

    tableHead.insertAdjacentHTML('beforeend', '<th>First Name</th><th>Last Name</th>');
    table.insertAdjacentElement('afterbegin', tableHead);

    for (let stud of studentList) {
        const studentRow = document.createElement('tr');

        studentRow.innerHTML = `
            <td>${stud.firstName}</td>
            <td>${stud.location}</td>
        `;

        table.insertAdjacentElement('beforeend', studentRow);
    }

    document.body.insertAdjacentElement('beforeend', table);
}

showTable(studentList)