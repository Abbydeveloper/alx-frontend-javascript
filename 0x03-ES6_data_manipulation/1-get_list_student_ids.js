export default function getListStudentIds(arr) {
  if (Array.isArray(arr))
    return arr.map((list) => list.id );
  return [];
}
