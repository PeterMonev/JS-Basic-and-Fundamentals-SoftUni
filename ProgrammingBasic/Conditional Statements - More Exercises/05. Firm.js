function firm(input){
    const neededHours = Number(input[0]);
    const days = Number(input[1]);
    const worker = Number(input[2]);

    let time = (days * 0.9)
    time *= Math.floor(8)
    let overTime = worker * (2 * days);
    let allHours = (time + overTime);
    let timeLeft = 0

    if (allHours >= neededHours){
        timeLeft = Math.floor( allHours - neededHours)
        console.log(`Yes!${timeLeft} hours left.`)
    } else {
        timeLeft = Math.ceil(neededHours - allHours)
        console.log(`Not enough time!${timeLeft} hours needed.`)
    }
    






}
firm(["90","7","3"]);
firm(["99","3","1"]);
firm(["50","5","2"]);