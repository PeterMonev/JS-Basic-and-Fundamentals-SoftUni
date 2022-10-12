function nonDecreasingSubset(array){
     
    let newArr = [];
    let biggestNum = array[0];
     
    for(let element of array){
 
        if(biggestNum <= element){
            biggestNum = element;
        } else {
            newArr.push(element);
        }
        
    }
      


}
nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);