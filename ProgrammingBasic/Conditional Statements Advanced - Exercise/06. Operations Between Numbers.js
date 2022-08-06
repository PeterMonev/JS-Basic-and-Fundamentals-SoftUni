function operationNumber(input){
    const n1 = Number(input[0]);
    const n2 = Number(input[1]);
    const operator = input[2];
    let result = 0
    let evenOrOdd

    switch (operator) {
        case "+":
            result = n1 + n2;
            if (result % 2 === 0){
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd"; }
          console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOrOdd}`);
            break;
        case "-":
            result = n1 - n2;
            if (result % 2 === 0){
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd"; }
 
          console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOrOdd}`);
            break;
        case "*":
            result = n1 * n2;
            if (result % 2 === 0){
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd"; }
 
          console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOrOdd}`);
            break;
        case "/":
            result = ( n1 / n2).toFixed(2);
            if (n2 === 0){
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                console.log(`${n1} / ${n2} = ${result}`);
            }
            break;
        case "%":
            result = n1 % n2;
            if (n2 === 0){
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                   console.log(`${n1} % ${n2} = ${result}`);
            }
         
            break;
       
    }

    

}
operationNumber(["10","12","+"]);
operationNumber(["10","1","-"]);
operationNumber(["7","3","*"]);
operationNumber(["123","12","/"]);
operationNumber(["10","3","%"]);