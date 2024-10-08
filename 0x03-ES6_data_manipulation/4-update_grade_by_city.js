export default function updateStudentGradeByCity(arr, city, newGrades) {
  const cityStudents = arr.filter((student) => student.location === city);
  return cityStudents.map((student) => {
    const newRecord = student;
    for (const grade of newGrades) {
      if (student.id === grade.studentId) {
        newRecord.grade = grade.grade ? grade.grade : 'N/A';
      }
    }
    return newRecord;
  });
}
