function graduation(input){
    index = 0;
    let name = input[index++];
    let i = 1 ;
    let counter = 0;
    let sumGrade = 0;
    let isexcluded = false;

    while(i <= 12){
        let grade = Number(input[index++]);

        if (grade < 4){
            counter++;
            if(counter > 1){
                isexcluded = true;
                console.log(`${name} has been excluded at ${i} grade`);
                break;
            }
            continue;
        }
        sumGrade += grade;
        i++;

    }

if(!isexcluded){
    let averageSum = sumGrade / 12 ;
console.log(`${name} graduated. Average grade: ${averageSum.toFixed(2)}`)
  
}

}
graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])