export default function getStudentIdsSum(arr) {
  return arr.reduce((total, student) => {
    return total + student.id
  }, 0);
}
