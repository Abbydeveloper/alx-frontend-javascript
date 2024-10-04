export default function createIteratorObject(report) {
  let employees = [];
  for (const value of Object.values(report.allEmployees)) {
    employees = [
      ...employees,
      ...value,
    ];
  }

  return employees;
}
