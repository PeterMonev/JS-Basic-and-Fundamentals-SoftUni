function examPreparation(input) {
  let negativeGrade = Number(input[0]);
  let index = 1;
  let nameClass = input[index++];
  let numberOfProblems = 0;
  let averagrade = 0;
  let sumgrade = 0;
  let lastProblems = "";
  let alaba = 0;

  while (nameClass !== "Enough") {
    let grade = Number(input[index++]);
    if (4 >=- grade) {
      numberOfProblems++;
      
      if (numberOfProblems > negativeGrade) {
        console.log(`You need a break, ${negativeGrade} poor grades.`);
        break;
      }
    }
    alaba = nameClass
    sumgrade += grade;
    nameClass = input[index++];
    numberOfProblems++;
    lastProblems++;
    averagrade = sumgrade / lastProblems;
    
  
  }

  if(nameClass === "Enough") {
console.log(`Average score: ${averagrade.toFixed(2)}`);
console.log(`Number of problems: ${lastProblems}`)
console.log(`Last problem: ${alaba}`);
  }
}
examPreparation(["3","Money","6","Story","4","Spring Time","5","Bus","6","Enough",]);
examPreparation(["2","Income","3","Game Info","6","Best Player","4"]);
