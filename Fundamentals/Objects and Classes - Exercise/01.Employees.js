/*function solve(input) {
   let listOfEmployees = {};

   for(let employee of input) {
      listOfEmployees.name = employee;
      listOfEmployees.number = employee.length;

      console.log(`Name: ${listOfEmployees.name} -- Personal Number: ${listOfEmployees.number}`)
   }

} */
function solve(input) {
    let listOfEmployees = [];
    class Employees {
        constructor(name,length){
            this.name = name;
            this.length = length;
        }
    }

    for(let employee of input) {
        let currentEmployee = new Employees(employee,employee.length);
        listOfEmployees.push(currentEmployee);    
    }

    listOfEmployees.forEach((currentEmployee)=>  console.log(`Name: ${currentEmployee.name} -- Personal Number: ${currentEmployee.length}`))
}  

solve([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
