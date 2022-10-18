function bombNumber(bombArray,bomb){
     
    let bombNumber = bomb[0];
    let bombDestruction = bomb[1];
    let bombIndex = [];
    let newArr = bombArray
    let sum = 0;

    bombArray.includes(bombNumber)
  
    
       while(bombArray.includes(bombNumber)){
        
         bombIndex = bombArray.indexOf(bombNumber);    
         let startExplosionIndex = Math.max(0,bombIndex - bombDestruction)
         let explosionIndex = bombDestruction * 2 + 1
         bombArray.splice(startExplosionIndex,explosionIndex)
        
       }
    sum = newArr.reduce((a,b)=> a+b, 0)

    console.log(sum);
  
}
bombNumber([1, 2, 2, 4, 2, 2, 2, 9],[4, 2]);
bombNumber([1, 4, 4, 2, 8, 9, 1],[9, 3]);
bombNumber([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],[2, 1]);
bombNumber([1, 7, 7, 1, 2, 3],[7, 1]);
bombNumber([1, 4, 1, 1, 1, 1, 1, 4, 1], [4, 2])