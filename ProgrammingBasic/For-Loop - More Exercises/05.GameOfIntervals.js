function gameOfInterval(input){
    let move = Number(input[0]);
    let point1 = 0;
    let point2 = 0;
    let point3 = 0;
    let point4 = 0;
    let point5 = 0;
    let point6 = 0;
    let bigPoint = 0;

    for(i = 1;i <= move ; i++){
        let interval = Number(input[i]);
        
        if(interval >= 0 && interval <= 9){
            bigPoint += interval * 0.2;
            point1++;
        } else if (interval >= 10 && interval <= 19){
            bigPoint += interval * 0.3;
            point2++;
        } else if (interval >= 20 && interval <= 29){
            bigPoint += interval * 0.4;
            point3++;
        } else if (interval >= 30 && interval <= 39){
            bigPoint += 50
            point4++;
        } else if (interval >= 40 && interval <= 50){
            bigPoint += 100
            point5++;
        } else if (interval < 0 || interval >= 50){
            bigPoint /= 2;
            point6++;
        }      
    }
    console.log(bigPoint.toFixed(2));
 let from0to9 = (point1 / move) * 100
 console.log(`From 0 to 9: ${from0to9.toFixed(2)}%`);
 let from10to19 = (point2 / move) * 100;
 console.log(`From 10 to 19: ${from10to19.toFixed(2)}%`);
 let from20to29 = (point3 / move) * 100;
 console.log(`From 20 to 29: ${from20to29.toFixed(2)}%`);
 let from30to39 = (point4 / move) * 100;
 console.log(`From 30 to 39: ${from30to39.toFixed(2)}%`);
 let from40to50 = (point5 / move) * 100;
 console.log(`From 40 to 50: ${from40to50.toFixed(2)}%`);
 let invalidNumber = (point6 / move) * 100;
 console.log(`Invalid numbers: ${invalidNumber.toFixed(2)}%`);
}
gameOfInterval([10,43,57,-12,23,12,0,50,40,30,20]);
