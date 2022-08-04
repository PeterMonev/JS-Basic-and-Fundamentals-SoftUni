function tradeCommisions(input){
    const town = input[0];
    const sales = Number(input[1]);
    let result = 0

    if (town === "Sofia"){
        if(0 <= sales && sales <= 500){
           result = sales * 0.05;
        } else if (500 <= sales && sales <= 1000){
            result = sales * 0.07;
        } else if (1000 <= sales && sales <= 10000){
            result = sales * 0.08;
        } else if (sales > 10000){
            result = sales * 0.12;
        } else if(sales <0){
        console.log("error")
        }
    if(result>0){
        console.log(result.toFixed(2))
    }
    } else if (town === "Varna"){
        if(0 <= sales && sales <= 500){
            result = sales * 0.045;
         } else if (500 <= sales && sales <= 1000){
             result = sales * 0.075;
         } else if (1000 <= sales && sales <= 10000){
             result = sales * 0.10;
         } else if (sales > 10000){
             result = sales * 0.13;
         } else if(sales <0){
            console.log("error")
        }

         if(result>0){
            console.log(result.toFixed(2))
        }
    } else if (town === "Plovdiv"){
        if(0 <= sales && sales <= 500){
            result = sales * 0.055;
         
         } else if (500 <= sales && sales <= 1000){
             result = sales * 0.08;
             
         } else if (1000 <= sales && sales <= 10000){
             result = sales * 0.12; 
              

         } else if (sales > 10000){
             result = sales * 0.145;
            
        } else if(sales <0) {
        console.log("error");
        }     
        if(result>0){
            console.log(result.toFixed(2))
        }
} else {
    console.log("error");
    
} 












}
tradeCommisions(["Plovdiv","-20"]);
tradeCommisions(["Plovdiv","499.99"]);
tradeCommisions(["Varna","3874.50"]);