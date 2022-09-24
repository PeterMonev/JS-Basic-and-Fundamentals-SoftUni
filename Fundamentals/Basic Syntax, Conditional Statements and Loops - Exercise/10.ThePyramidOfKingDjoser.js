function thePyramidOFKingDjoser(base,increment){

    let heightCoun = 0;
    let stone = 0;
    let marbel = 0;
    let resultStone = 0;
    let resultMarbel = 0;
    let currBaseIncrement = base;
    let lapis = 0;
    let resultLapis = 0;
    let nextStep = 0;
    let nextBaseStep = 0;
    let currBase = 0;
    let gold = 0;

   for(let i = base; i > 0; i) {
       heightCoun++; 
      
        currBase = currBaseIncrement * currBaseIncrement;
        nextBaseStep = currBaseIncrement - 2;
        nextStep = nextBaseStep * nextBaseStep ;
       
        if(i == 1 || i == 2) {
           gold += currBase;
           gold = Math.ceil(gold *increment);
           break;
        }
        
       if(heightCoun % 5 === 0){
        lapis = currBase - nextStep;
        resultLapis += lapis * increment
        resultStone += nextStep * increment;

       } else {
        stone = nextBaseStep * nextBaseStep 
        marbel = Math.abs(currBase - stone);
        resultStone += stone * increment;
        resultMarbel += marbel * increment;
       }
       currBaseIncrement -= 2
       i -= 2;
   }
  
   console.log(`Stone required: ${Math.ceil(resultStone)}`);
   console.log(`Marble required: ${Math.ceil(resultMarbel)}`);
   console.log(`Lapis Lazuli required: ${Math.ceil(resultLapis)}`);
   console.log(`Gold required: ${gold}`);
   console.log(`Final pyramid height: ${Math.floor(heightCoun * increment)}`)

}
thePyramidOFKingDjoser(23,0.5);   
//thePyramidOFKingDjoser(11,0.75)