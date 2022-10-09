function mergeArray(arr1, arr2) {
     let arr3 = [];
     let string = '';
     let number = 0;
      
    for(let i = 0; i < arr1.length; i++) {

        if(i % 2 === 0){
            number = Number(arr1[i]) + Number(arr2[i]);
           arr3.push(number);
           number = 0;
        } else {
           string += arr1[i] + '' + arr2[i];
           arr3.push(string);
           string = '';
        }

    }
 console.log(arr3.join(' - '));



}
mergeArray(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
