function blackFlag(allPlundered) {
  let dayOfPlunder = Number(allPlundered[0]);
  let dailyPlunder = Number(allPlundered[1]);
  const expectedPlunder = Number(allPlundered[2]);
  let totalPlunder = 0;

  for (let i = 1; i <= dayOfPlunder; i++) {
     totalPlunder += dailyPlunder;
    if (i % 3 === 0 ) {
      totalPlunder += dailyPlunder * 0.5;
    } 
    if (i % 5 === 0 ) {
      totalPlunder *= 0.7;
    } 
     
    
  }
  if (totalPlunder >= expectedPlunder) {
    console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
  } else {  
    let percentage = (totalPlunder / expectedPlunder) * 100;
    console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
  }
}
blackFlag(["5", "40", "100"]);
blackFlag(["10", "20", "380"]);
