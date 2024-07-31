function updateStudentGradeByCity(arr, city, newGrades) {
  if (arr instanceof Array) {
    const filteredStudents = arr.filter((obj) => obj.location === city, city);
    return filteredStudents.map((student) => {
      const grade = newGrades.filter((grade) => grade.studentId === student.id, student);
      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade,
      };
    }, newGrades);
  }

  return [];
}

export default updateStudentGradeByCity;
