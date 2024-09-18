const fs = require('fs');

const countStudents = (path) => {
  try {
    const database = fs.readFileSync(path, 'utf-8');
    const lines = database.trim().split('\n');
    lines.shift();
    const FIELDS = {};
    let NUMBER_OF_STUDENTS = 0;
    lines.forEach((line) => {
      const student = line.split(',');
      if (student[3] === undefined) return;
      if (!FIELDS[student[3]]) FIELDS[student[3]] = [];
      FIELDS[student[3]].push(student[0]);
      NUMBER_OF_STUDENTS += 1;
    });

    console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);

    for (const FIELD in FIELDS) {
      if (FIELD) {
        console.log(`Number of students in ${FIELD}: ${FIELDS[FIELD].length}. List: ${FIELDS[FIELD].join(', ')}`);
      }
    }
  } catch (err) {
    console.log("Cannot load the database");
  }
};

module.exports = countStudents;
