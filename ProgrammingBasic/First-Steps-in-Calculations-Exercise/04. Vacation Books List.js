function vacationBooksList(input){
    const numberList = Number(input[0]);
    const list = Number(input[1]);
    const numberDays = Number(input[2])
    const totalTime = numberList / list
    const necessaryHourPerDay = totalTime / numberDays
    console.log(necessaryHourPerDay)

}
vacationBooksList(["212","20","2"])
vacationBooksList(["432","15","4"])