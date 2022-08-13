function reprainting(input){
    const protectiveNylonPerMeter = 1.50      
    const paint = 14.50
    const paintThinner = 5
    const extraPaintPercent = 0.1
    const extraNylonPerMeter = 2
    const bagPrice = 0.4


    const necessaryNylon = Number(input[0])
    const necessaryPaint = Number(input[1])
    const necessaryThinner = Number(input[2])
    const hourForWorkers = Number(input[3])

    const sumNylon = (necessaryNylon + extraNylonPerMeter) * protectiveNylonPerMeter
    const sumPaint = (necessaryPaint + necessaryPaint * extraPaintPercent) * paint
    const sumThinner = necessaryThinner * paintThinner
    const totalPrice = sumNylon + sumPaint + sumThinner + bagPrice 
    const priceForWorkersPerHour = totalPrice * 0.3
    const totalWorkerCost = hourForWorkers * priceForWorkersPerHour
    const totalCost = totalWorkerCost + totalPrice

    console.log(totalCost)


 }
reprainting(["10 ","11 ","4 ","8 "])

