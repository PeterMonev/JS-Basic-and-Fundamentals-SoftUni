function sumFirstAndLast(arr){
      
    let firstArr = arr.shift();
    let lastArr = arr.pop();
    let result = Number(firstArr) + Number(lastArr);

    console.log(result);


}
sumFirstAndLast(['20', '30', '40']);