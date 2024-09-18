const fs = require('fs');

function countStudents(filePath) {
  try {
    // Read file synchronously
    const data = fs.readFileSync(filePath, 'utf8');

    if (!data) throw new Error('Cannot load the database');

    // Split lines by new lines and filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length === 0) throw new Error('Cannot load the database');

    // Extract header and student data
    const headers = lines[0].split(',');
    const students = lines.slice(1);

    const fieldCounts = {};
    let totalStudents = 0;

    // Process each student line
    students.forEach((student) => {
      const studentData = student.split(',');
      if (studentData.length === headers.length) {
        totalStudents += 1;
        const field = studentData[studentData.length - 1]; // Assume the last column is the field
        const firstName = studentData[0]; // Assume first column is the first name

        // If the field doesn't exist yet in the count, initialize it
        if (!fieldCounts[field]) {
          fieldCounts[field] = { count: 0, names: [] };
        }

        fieldCounts[field].count += 1;
        fieldCounts[field].names.push(firstName);
      }
    });

    console.log(`Number of students: ${totalStudents}`);

    // Log number of students and list of names per field
    for (const [field, data] of Object.entries(fieldCounts)) {
      console.log(
        `Number of students in ${field}: ${data.count}. List: ${data.names.join(', ')}`,
      );
    }
  } catch (error) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
