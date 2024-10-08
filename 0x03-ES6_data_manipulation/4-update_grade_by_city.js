export default function updateStudentGradeByCity(arr, city, newGrades) {
  const cityStudents = arr.filter((student) => student.location === city);
  return cityStudents.map((student) => {
    const newRecord = student;
    newRecord.grade = 'N/A';
    for (const grade of newGrades) {
      if (student.id === grade.studentId) {
        newRecord.grade = grade.grade;
      }
    }
    return newRecord;
  });
}
