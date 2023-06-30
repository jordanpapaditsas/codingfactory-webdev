const student = {
  id: 1,
  firstname: "Jordan",
  lastname: "Pap",
  address: {
    street: "Patission",
    number: "76",
    zipcode: "10434"
  }
};

const bob = new Object();
bob.id = 1;
bob.firstname = "Bob";
bob.lastname = "D.";



// console.log(student.id);
// console.log(student["id"]);

// console.log(student[pivot]);

// for (property in student) {
//   console.log(`${property}, ${student[property]}`);
// }

for (const [key, value] of Object.entries(bob)) {
    console.log(`${key} : ${value}`);
}