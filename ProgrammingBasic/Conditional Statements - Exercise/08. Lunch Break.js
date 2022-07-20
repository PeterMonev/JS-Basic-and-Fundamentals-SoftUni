function lunchBreak(input){
    const serialName = input[0]
    const episodeDuration = Number(input[1])
    const restDuration = Number(input[2])

    let luchnTime = restDuration / 8
    let otdihTime = restDuration / 4
    let freeTime =Math.abs(restDuration - luchnTime - otdihTime)
    let neededtime = Math.abs(episodeDuration - freeTime)

    if (freeTime >= episodeDuration){
        console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(neededtime)} minutes free time.`)

    } else {
        console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(neededtime)} more minutes.`)
        
    }
 

``







}
lunchBreak(["Game of Thrones","60","96"])
lunchBreak(["Teen Wolf","48","60"])
