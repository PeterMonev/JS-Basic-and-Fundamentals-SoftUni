function onTimeforExam(input) {
  let hourExam = Number(input[0]);
  let minExam = Number(input[1]);
  let hourArrive = Number(input[2]);
  let minArrive = Number(input[3]);

  let allMinExam = hourExam * 60 + minExam;
  let allMinArrive = hourArrive * 60 + minArrive;

  if (allMinExam >= allMinArrive) {
    if (allMinExam - allMinArrive > 30) {
      console.log("Early");
    } else {
      console.log("On time");
    }
  } else {
    console.log("Late");
  }

  let hour = 0;
  let minutes = 0;

  if (allMinExam > allMinArrive) {
    hour = Math.floor((allMinExam - allMinArrive) / 60);
    minutes = (allMinExam - allMinArrive) % 60;
    if (hour > 0) {
      console.log(`${hour}:${minutes.toString().padStart(2,'0')} hours before the start`);
    } else {
      console.log(`${minutes} minutes before the start`);
    }
  } else if (allMinExam < allMinArrive){
    hour = Math.floor((allMinArrive- allMinExam) / 60);
    minutes = (allMinArrive - allMinExam) % 60;
    if (hour > 0) { 
      console.log(`${hour}:${minutes.toString().padStart(2,'0')} hours after the start`);
    } else {
      console.log(`${minutes} minutes after the start`);
    }
  }
}
onTimeforExam(["9", "30", "9", "50"]);
onTimeforExam(["9", "00", "8", "30"]);
onTimeforExam(["16", "00", "15", "00"]);
onTimeforExam(["9", "00", "10", "30"]);
onTimeforExam(["14", "00", "13", "55"]);
onTimeforExam(["11", "30", "8", "12"]);
onTimeforExam(["10", "00", "10", "00"]);
