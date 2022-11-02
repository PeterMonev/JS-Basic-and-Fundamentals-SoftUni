class Student {
    constructor(name,grade){
        this.name = name;
        this.grade = grade;
    }

    sayHi(){
        console.log(`${this.name} says hey!`);
    }
}

let myStudent = new Student('Peter', 5.50);
console.log(myStudent);
myStudent.sayHi();

let newStudent = new Student('Gosho', 5.30);
console.log(newStudent);
newStudent.sayHi();