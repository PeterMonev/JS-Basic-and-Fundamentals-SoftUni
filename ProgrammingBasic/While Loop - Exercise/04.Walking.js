function walking(input){
    index = 0 ;
    let command = input[index++];
    let goal = 10000;
    let overStep = 0;
    let allStep = 0;
    
    while(command !== "Going home"){ 
        command = Number(command)
         allStep += command ;
        
        if (goal < allStep){
         overStep = allStep - goal;
         console.log("Goal reached! Good job!");
         console.log(`${overStep} steps over the goal!`);
         break;
        }
        command = input[index++];
    }
    if(command === "Going home"){
  let stepToHome = Number(input[index++]);
  allStep += stepToHome
     if ( goal < allStep){
    overStep = allStep - goal;
    console.log("Goal reached! Good job!");
    console.log(`${overStep} steps over the goal!`);
  } else {
     goal -= allStep;
    console.log(`${goal} more steps to reach goal.`)

  }
}
}
walking(["1000","1500","2000","6500"]);
walking(["1500","300","2500","3000","Going home","200"]);
walking(["1500","3000","250","1548","2000","Going home","2000"])
