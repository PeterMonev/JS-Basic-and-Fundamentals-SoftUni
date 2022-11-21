function bonusScoringSystem(scoringSystem) {
    const studentNum = +scoringSystem.shift();
    const lectureNum = +scoringSystem.shift();
    const additionalBonus = +scoringSystem.shift();
    let maxAttendances = 0;
    let totalBonus = 0;
    for(let i = 0; i < scoringSystem.length; i++) {
        
        if(+scoringSystem[i] > maxAttendances) {
           maxAttendances = scoringSystem[i];
           totalBonus = (maxAttendances/lectureNum) * (5+(additionalBonus))
        }
    }

    console.log(`Max Bonus: ${Math.ceil(totalBonus)}.`);
    console.log(`The student has attended ${maxAttendances} lectures.`)
}
bonusScoringSystem(["5", "25", "30", "12", "19", "24", "16", "20"]);
bonusScoringSystem[
  ("10", "30", "14", "8", "23", "27", "28", "15", "17", "25", "26", "5", "18")
];
