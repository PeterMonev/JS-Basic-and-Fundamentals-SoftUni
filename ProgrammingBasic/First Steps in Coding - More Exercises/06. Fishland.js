function filshLand(input){
    const skumriaPrice = Number(input[0]);
    const cacaPrice = Number(input[1]);
    const palamudKg = Number(input[2]);
    const safridKg = Number(input[3]);
    const midikg = Number(input[4]);
    const MidiPrice = 7.50

    let palamudPrice = skumriaPrice * 1.6
    let safridPrice = cacaPrice * 1.8
    let safirdcost = safridPrice * safridKg
    let palamudCost = palamudKg * palamudPrice
    let midiCost = MidiPrice

    let totalCost = safirdcost + palamudCost + midiCost * midikg

    console.log(totalCost.toFixed(2))








}
filshLand([6.90,4.20,1.5,2.5,1])