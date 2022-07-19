function worldSwimming(input){
    let wordRecordSec = Number (input[0])
    let distancePerMeter = Number (input[1])
    let timePerSec = Number (input[2])

    let timePerMeter = distancePerMeter * timePerSec
    let waterReduce =Math.floor(distancePerMeter / 15) * 12.5
   
    let allTime = timePerMeter + waterReduce
    let resulut = 0 
     
      if (wordRecordSec <= allTime){
          resulut = allTime - wordRecordSec

          console.log(`No, he failed! He was ${resulut.toFixed(2)} seconds slower.`)
     
        } else  { 
 

        console.log(`Yes, he succeeded! The new world record is ${allTime.toFixed(2)} seconds.`)
        }


}
worldSwimming(["10464","1500","20"])
worldSwimming(["55555.67","3017","5.03"])