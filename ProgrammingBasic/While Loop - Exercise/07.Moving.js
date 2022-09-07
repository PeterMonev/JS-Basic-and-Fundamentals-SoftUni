function moving(input){
    let a = Number(input[0]);
    let b = Number(input[1]);
    let h = Number(input[2]);
    let volumeHouse = a * b * h;
    let index = 3;
    let box = Number(input[index++])
    let boxVolume = 0;
    let needVolume = 0;

    while(box !== "Done"){
      box = Number(box)
        boxVolume += box;

        if(boxVolume >= volumeHouse){
            needVolume = boxVolume - volumeHouse
            console.log(`No more free space! You need ${needVolume} Cubic meters more.`)
            break;

        }
       box = input[index++];
        box += ""
        
    }
    if(box === "Done"){
        needVolume = volumeHouse - boxVolume;
        console.log(`${needVolume} Cubic meters left.`)
    }
}
//moving(["10", "10","2","20","20","20","20","122"]);
moving(["10", "1","2","4", "6","Done"])