export default function iteratorThroughObject(reportWithIterator) {
  const employees = [];
  for (const value of Object.values(reportWithIterator.allEmployees)) {
    employees.push(value);
  }

  return employees.join(' | ');
}
