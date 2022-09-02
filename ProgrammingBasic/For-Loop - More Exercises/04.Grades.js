function grades(input){
    let students = Number(input[0]);

    let grade1 = 0;
    let grade2 = 0;
    let grade3 = 0;
    let grade4 = 0;
    let studentCounter1 = 0;
    let studentCounter2 = 0;
    let studentCounter3 = 0;
    let studentCounter4 = 0;

    for(i = 1 ; i <= students ; i++){
        let grade = Number(input[i]);

        if(grade >= 2.00 && grade <= 2.99){
            grade1 += grade
            studentCounter1++;
        } else if (grade >= 3.00 && grade <= 3.99){
            grade2 += grade
            studentCounter2++;
        } else if (grade >= 4.00 && grade <= 4.99){
            grade3 += grade
            studentCounter3++

        } else if (grade >= 5.00 && grade <= 6.00){
            grade4 += grade
            studentCounter4++;

        }

      }

 let allGrade = grade1 + grade2 + grade3 + grade4
 
 let students4 = (studentCounter4 / students) * 100;
console.log(`Top students: ${students4.toFixed(2)}%`);
let students3 = (studentCounter3 / students) * 100;
console.log(`Between 4.00 and 4.99: ${students3.toFixed(2)}%`);
let students2 = (studentCounter2 / students) * 100;
console.log(`Between 3.00 and 3.99: ${students2.toFixed(2)}%`);
let students1 = (studentCounter1 / students) * 100;
console.log(`Fail: ${students1.toFixed(2)}%`)
let averageGread = allGrade / students
console.log(`Average: ${averageGread.toFixed(2)}`);

}
//grades([10,3.00,2.99,5.68,3.01,4,4,6.00,4.50,2.44,5]);
grades([6,2,3,4,5,6,2.2])