export default function getStudentsByLocation(arr, loc) {
  return arr.filter((student) => student.location === loc);
}
