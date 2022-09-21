function rounding(num,precisions) {
    num = Number(num);
    precisions = Number(precisions);
    if (precisions > 15){
        precisions = 15;
    }
    num = num.toFixed(precisions);

    console.log(parseFloat(num));
}
rounding(3.1415926535897932384626433832795,2)
rounding(10.5,3)