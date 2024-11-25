interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const first = {
  firstName: "Ada",
  lastName: "Obi",
  age: 20,
  location: "Nigeria",
};

const second = {
  firstName: "Lagbaja",
  lastName: "Tamedo",
  age: 30,
  location: "Canada",
};

const studentsList: Student[] = [ first, second ];

const renderTable = function () {
  const tab = document.createElement("table");
  studentsList.forEach((student) => {
    const row = tab.insertRow();
    const firstcell = row.insertCell();
    firstcell.innerHTML = student.firstName;
    const locationcell = row.insertCell();
    locationcell.innerHTML = student.location;
  });
  document.body.appendChild(tab); 
};
renderTable();
