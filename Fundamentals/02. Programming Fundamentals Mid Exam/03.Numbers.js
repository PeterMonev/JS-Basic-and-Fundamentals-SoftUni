function number(array){
    array = array.split(" ").map(Number);
    let intialValue = 0;
    let avarageNum = array.reduce((previousValue,currentValue) => previousValue + currentValue,intialValue);
    avarageNum /= array.length;
    let newArr = [];

      for(let i = 0; i < array.length; i++){
         if(avarageNum < array[i]){
         newArr.push(array[i]);
      }
}
    newArr = newArr.sort((a,b) => a-b);
    let result = [];

      if(newArr.length <= 5 && newArr.length != 0){
        result = newArr;
        return  console.log(result.reverse().join(' '));

      } else if (newArr.length === 0){
        return console.log('No')

      } else {
        newArr.reverse();
    for(let j = 0;  j < newArr.length; j++){
        if(j < 5){
        result.push(newArr[j]);
        } else {
            break;
        }
    }
       return console.log(result.join(' '));
}
}
number('10 20 30 40 50');
number('5 2 3 4 -10 30 40 50 20 50 60 60 51');
number('-1 -2 -3 -4 -5 -6');
number('1')