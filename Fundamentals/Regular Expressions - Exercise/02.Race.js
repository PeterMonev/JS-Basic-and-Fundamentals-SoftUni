function race(input) {
    let participants = input.shift().split(', ')
    let line = input.shift();
    let partsObj = {}
    while (line !== 'end of race') {
        let patternName = /[A-Za-z]/g;

        let name = line.match(patternName).join('')

        let patternDistance = /[0-9]/g;

        let distance = line.match(patternDistance).join('')
        let distanceSum = 0;
        for (let i = 0; i < distance.length; i++) {
            let digit = Number(distance[i])
            distanceSum += digit;
        }
        if (participants.includes(name)){
            if (!partsObj.hasOwnProperty(name)) {
                partsObj[name] = distanceSum
            } else {
                partsObj[name] += distanceSum
            }
        }
        line = input.shift();
    }
    let partsArr = []
    for (let partName in partsObj) {
        partsArr.push([partName, partsObj[partName]])
    }
    partsArr.sort((a,b)=>b[1]-a[1])
    console.log(`1st place: ${partsArr[0][0]}`);
    console.log(`2nd place: ${partsArr[1][0]}`);
    console.log(`3rd place: ${partsArr[2][0]}`);
}
race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']
);