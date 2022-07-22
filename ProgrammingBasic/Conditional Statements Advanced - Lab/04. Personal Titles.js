function personalTitles(input){
    const age = Number(input[0]);
    const gender = input[1];

    if(gender == "f"){
        if(age >= 16){
            console.log("Ms.");
        } else {
            console.log("Miss");
    } 

    } else {
        if( age >= 16){
            console.log("Mr.");
        } else {
            console.log("Master");
        }
    }


}
personalTitles(["12","f"]);
personalTitles(["17","m"]);
personalTitles(["25","f"]);