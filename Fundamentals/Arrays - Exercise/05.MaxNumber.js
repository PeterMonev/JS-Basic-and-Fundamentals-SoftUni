function maxNumber(arr){
let bigInt = '';
let isBig = true; 

for (let i = 0; i < arr.length; i++) {
    isBig = true;
    for(let j = i + 1; j < arr.length; j++) {
      
        if(arr[i] <= arr[j]) {
            isBig = false;
            break ;
        }
       
    }
  if(isBig){
      bigInt += ' ' + arr[i]
  } 

}

  console.log(bigInt)
}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);