const fs = require('fs');

const countStudents = (path) => {
  try {
    const database = fs.readFileSync(path, 'utf-8');
    const lines = database.trim().split('\n');
    const NUMBER_OF_STUDENTS = lines.length - 1;
    console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);
    lines.shift();
    const FIELDS = {};
    lines.forEach((line) => {
      const student = line.split(',');
      if (!FIELDS[student[3]]) FIELDS[student[3]] = [];
      FIELDS[student[3]].push(student[0]);
    });

    for (const FIELD in FIELDS) {
      if (FIELD) {
        console.log(`Number of students in ${FIELD}: ${FIELDS[FIELD].length}. List: ${FIELDS[FIELD].join(', ')}`);
      }
    }
  } catch (err) {
    console.log('Cannot load database');
  }
};

module.exports = countStudents;
