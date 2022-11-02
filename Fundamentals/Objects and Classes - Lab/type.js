/* function increment(values){
    values += 1;

}

let num = 10;

increment(num);

console.log(num) 
*/

function increment(ref){
    ref.number += 1; 
}

let myObj = {
    number : 5 
} ;

increment(myObj);
console.log(myObj)