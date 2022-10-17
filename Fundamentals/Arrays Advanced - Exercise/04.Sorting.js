function sorting(array){
    array.sort((a,b) => b-a);
    let newArr = [];

    while (array.length > 0){
        let bigNum = array.shift();
        let smallNum = array.pop();
        newArr.push(bigNum);
        newArr.push(smallNum);
    }

    console.log(newArr.join(' '));
        
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);