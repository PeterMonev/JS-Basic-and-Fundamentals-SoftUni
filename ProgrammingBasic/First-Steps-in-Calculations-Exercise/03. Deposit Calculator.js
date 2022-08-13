function depositCalculator(input){
    const depositSum = Number(input[0]);
    const period = Number(input[1]);
    const percent = Number(input[2]);
    
    const naturalInterest = (depositSum * percent ) / 100;
    const ineterestPerMont = naturalInterest / 12;
    const yearinterestpercent = depositSum + period * ineterestPerMont;
    console.log(yearinterestpercent)


}
depositCalculator(["200","3","5.7"])
depositCalculator(["2350","6","7"])