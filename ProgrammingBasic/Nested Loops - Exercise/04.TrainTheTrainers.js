function trainTheTrainers(input){
    let jury = Number(input[0]);
    let allGradeCount = 0;
    let gradeCounter = 0;
    let index = 1;
    let subject = input[index++];
    let allGrade = 0;
    let averageGrade = 0;
    let allPresentaciones = 0;



       
        while(subject !== "Finish"){
        
              for (let x = 1;x <= jury ;x++){ 
            let  grade = Number(input[index++]);
                  grade *= 100;
                 allGrade += grade;
               
                 gradeCounter++;
                  allGradeCount++
            } 
            allPresentaciones += allGrade;
            
            averageGrade = (allGrade / gradeCounter) / 100;
            allGrade = 0;
            gradeCounter = 0;
            console.log(`${subject} - ${averageGrade.toFixed(2)}.`)
            
            
            subject = input[index++];
        }
       allPresentaciones /= 100; 
    if (subject === "Finish"){
        allPresentaciones /=  allGradeCount
        allPresentaciones = Math.fround(allPresentaciones)
    console.log(`Student's final assessment is ${allPresentaciones.toFixed(2)}.`)
    }

    
}
//trainTheTrainers(["2","While-Loop","6.00","5.50","For-Loop","5.84","5.66","Finish"]);
trainTheTrainers(["3","Arrays","4.53","5.23","5.00","Lists","5.83","6.00","5.42","Finish"])
//trainTheTrainers(["2","Objects and Classes","5.77""4.23","Dictionaries","4.62","5.02","RegEx","2.88","3.42","Finish"])