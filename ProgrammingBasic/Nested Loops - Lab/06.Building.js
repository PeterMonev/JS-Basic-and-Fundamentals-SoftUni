function building(input){
    let x = Number(input[0]);
    let y = Number(input[1]);

    for (let floor = x;  floor > 0; floor--){
        let result = ""
        for(let room = 0 ;room < y ; room++){
            if (floor === x){
                result += `L${floor}${room} `;
            } else if (floor % 2 === 0){
                result += `O${floor}${room} `;
            } else {
                result += `A${floor}${room} `;
            }
           
        }
        console.log(result);


    }
}
building(["6", "4"])