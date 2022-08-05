function cinema(input){
    const primierePrice = 12;
    const normalPrice = 7.5;
    const discount = 5;

    let type = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);
    let income = 0

    if (type === "Premiere"){
        income = r * c * primierePrice

    } else if (type === "Normal"){
        income = r * c * normalPrice

    } else if (type === "Discount"){
        income = r * c * discount
    } console.log(`${income.toFixed(2)} leva`)





}
cinema(["Premiere","10","12"]);
cinema(["Normal","21","13"]);
cinema(["Discount","12","30"]);