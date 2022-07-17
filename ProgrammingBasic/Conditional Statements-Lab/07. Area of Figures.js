function areaOfFigures(input) {
    const type = input[0]
    const a = Number(input[1])
    const b = Number(input[2])
 
    let result = 0

    if ( type === "square"){
         result = a * a
        
    } else if (type === "rectangle"){
          result = a * b
      
    } else if (type === "circle"){
        result = Math.PI * Math.pow(a,2)
      
    } else if (type ==="triangle"){
         result = a * b / 2
        
    }
    console.log (result.toFixed(3))
    













}

areaOfFigures(["square", "5"]);
areaOfFigures(["rectangle", "7", "2.5"]);
areaOfFigures(["circle", "6"]);
areaOfFigures(["triangle", "4.5", "20"]);
