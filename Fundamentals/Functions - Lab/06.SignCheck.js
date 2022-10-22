function signCheck(n1, n2, n3) {

    if(n1 < 0 && n2 > 0 && n3 > 0 || n1 > 0 && n2 < 0 && n3 > 0 || n1 > 0 && n2 > 0 && n3 < 0){
        console.log("Negative");
        
    } else if (n1 < 0 && n2 < 0 && n3 > 0 || n1 < 0 && n2 > 0 && n3 < 0  || n1 > 0 && n2 < 0 && n3 < 0  ){
        console.log("Positive");

    } else if (n1 < 0 && n2 < 0 && n3 < 0){
        console.log("Negative");
    } else {
        console.log("Positive")
    }
}
signCheck(5, 12, -15);
