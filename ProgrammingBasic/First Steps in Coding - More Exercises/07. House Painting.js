function housePainting(input){
    const x = Number(input[0])
    const y = Number(input[1])
    const h = Number(input[2])

    let sidewall = (x * y)
    let window = Math.pow(1.5,2)
    sidewall *= 2
    window *= 2
    let twoSide= sidewall - window
    let backwall = x * x
    let entry = 1.2 * 2
    backwall *= 2
    let fronNBackWall = backwall - entry
    let allArea = twoSide + fronNBackWall
    allArea /= 3.4

    let roof= 2 *(x * y)
    let roofTriangle = 2 *(x * h / 2)
    
    let allRoof = roof + roofTriangle
    allRoof /= 4.3


    console.log(allArea.toFixed(2))
    console.log(allRoof.toFixed(2))


    /*let frontAndBack = 2*(x*x)-(1.2*2);
    let sides = 2*(x*y)-2*(1.5*1.5);
    let greeen = (frontAndBack+sides)/3.4

    let roof= 2 *(x * y)
    let roofTriangle = 2 *(x * h / 2)
    
    let allRoof = roof + roofTriangle
    allRoof /= 4.3*/







}
housePainting([6,10,5.2])
housePainting([10.25,15.45,8.88])