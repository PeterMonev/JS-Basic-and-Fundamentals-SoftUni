function solve(arr){
  
    let leftSum = 0;
    let rightSum = 0;
    let index = '';
  
    if(arr.length < 2){
      console.log('0')
    } else {
  
      for(let i = 0; i < arr.length; i++){
         rightSum = 0;
        for(let j = i + 1; j < arr.length; j++){
              rightSum += arr[j];
        }
        if(leftSum === rightSum){
          index = i;
          break;
        } else {
          leftSum += arr[i]
        }
      }
      if(index === ''){
        console.log('no');
      } else {
        console.log(index);
      }
    }
  
  
  
  }
  solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
  solve([1, 2])