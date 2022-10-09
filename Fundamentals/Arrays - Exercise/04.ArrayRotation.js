function arrayRotation(arr,rotation) { 

    for(let i = 0; i < rotation; i++){
        
        let strig = arr.shift();
        arr.push(strig);
   
   }

 console.log(arr.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2) 
