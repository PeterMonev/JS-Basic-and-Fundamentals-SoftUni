function pipeInPools(input){
    const V = Number(input[0])
    const P1 = Number(input[1])
    const P2 = Number(input[2])
    const H = Number(input[3])

    let firstPipe = H * P1
    let secondPipe = H * P2
    let allSum = (firstPipe + secondPipe)
    let totalResult = allSum / V * 100

    if (allSum <= V){
        let result = firstPipe / allSum * 100
        let result1 = secondPipe / allSum * 100
        console.log(`The pool is ${totalResult.toFixed(2)}% full. Pipe 1: ${result.toFixed(2)}%. Pipe 2: ${result1.toFixed(2)}%.`)

    } else {
       let ostava = allSum - V
        console.log(`For ${H} hours the pool overflows with ${ostava} liters.`)
        
    }




    
}
pipeInPools([1000,100,120,3])
pipeInPools([100,100,100,2.5])