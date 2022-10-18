function searchForANumber(array, maniplationNum) {
    let takenArr = maniplationNum[0];
    let deletedArr = maniplationNum[1];
    let specialNum = maniplationNum[2];
    let counter = 0;

    let newArr = array.slice(0, takenArr);
    newArr = newArr.slice(deletedArr);

    while(newArr.includes(specialNum)){
        counter++
        let indexOfSpecialNum = newArr.indexOf(specialNum);
        newArr.splice(indexOfSpecialNum, 1);
    }

    console.log(`Number ${specialNum} occurs ${counter} times.`)
}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
