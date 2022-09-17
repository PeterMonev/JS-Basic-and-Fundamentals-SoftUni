function minigRig(input){
    let videoCardPrice = Number(input[0]);
    let adapterPrice = Number(input[1]);
    let consuamateElecVideo = Number(input[2]);
    let profitByCard = Number(input[3]);
    
    let allSpentMoney = (videoCardPrice * 13) + (adapterPrice * 13) + 1000;
    let allProfit = profitByCard - consuamateElecVideo;
    let allDayProfit = allProfit * 13;
    let rentalProfit = Math.ceil(allSpentMoney / allDayProfit);

    console.log(allSpentMoney);
    console.log(rentalProfit);



}
minigRig(["700","15","0.20","2"])