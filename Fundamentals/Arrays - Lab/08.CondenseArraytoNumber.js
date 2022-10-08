function condenseArraytoNumber(arr){
      
   
    while(arr.length > 1 ){
      
        let condense = []
        for(let i = 0; i < arr.length - 1; i++){
           condense[i] = arr[i] + arr[i + 1];

        }
        arr = condense
    }
    console.log(Number(arr))
}
//condenseArraytoNumber([2,10,3]);
condenseArraytoNumber([5,0,4,1,2]);
condenseArraytoNumber([1])