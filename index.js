let students = [
    {name: "Sanjay", gender: "male"},
    {name: "Poonam", gender: "female"},
    {name: "Anjali", gender: "female"},
    {name: "Harshal", gender: "male"},
    {name: "Pratik", gender: "male"},
];

// task 1

console.log(students.filter((value) => value.gender == "female"));

// task 2

console.log(students.filter((value) => value.name[0] == "A"));

// task 3 

console.log(students.filter((value) => value.gender == "male").length);