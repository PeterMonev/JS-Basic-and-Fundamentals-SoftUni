function sleepyTomCat(input){
  const holidays = Number (input[0])
  const holidaysMinPerDays = 127
  const wordMinPerDays = 63
  const year = 365
  const tomMinperYear = 30000
  
  let totalMinHolidays = holidays * holidaysMinPerDays
  let totalWorkDaysMin = year - holidays
  let totalMinWork = totalWorkDaysMin * wordMinPerDays
  let totalTime = totalMinHolidays + totalMinWork

  if (tomMinperYear >= totalTime){
console.log("Tom sleeps well")
    console.log(`${Math.floor((tomMinperYear - totalTime) / 60).toFixed(0)} hours and ${(tomMinperYear - totalTime) % 60} minutes less for play`)
   
} else {

    console.log("Tom will run away")
   console.log(`${Math.floor(((totalTime - tomMinperYear) / 60))} hours and ${((totalTime - tomMinperYear) % 60)} minutes more for play`)
    
}









}
sleepyTomCat([20])
sleepyTomCat([113])