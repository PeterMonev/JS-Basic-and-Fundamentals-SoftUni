function smallestOfThreeNumber(a, b, c) {

//    let smallestNum = function (a,b,c){
//        let smallestNumber = 0;
//        if(a <= b && a < c){
//            smallestNumber = a;
//        } else if ( b <= a && b < c){
//            smallestNumber = b;
//        } else {
//            smallestNumber = c;
//        }
//        return smallestNumber;
//    }
//   console.log(smallestNum(a,b,c));

let smallestNum = (a,b,c) => Math.min(a,b,c);
console.log(smallestNum(a,b,c));

}
smallestOfThreeNumber(2, 5, 3);
