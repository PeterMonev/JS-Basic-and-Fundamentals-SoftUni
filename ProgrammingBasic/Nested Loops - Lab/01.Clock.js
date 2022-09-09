function clock(){
    
    for( let h = 0 ; h < 24 ; h ++){
       
        for( min = 0 ; min < 60 ; min++){
         
           for (sec = 0 ; sec < 60; sec++){
  if(min < 10){
            console.log(`${h} : ${min} : ${sec}`)
           } else {
                console.log(`${h} : ${min} : ${sec}`)
         }
            
           }
    }
    }
    
  
}
clock([])