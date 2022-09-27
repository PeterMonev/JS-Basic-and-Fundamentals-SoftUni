function amazingNumber(number){
      number = number.toString();
      let sum = 0;
      
      for(let i = 0;i < number.length;i++){
          
          sum += Number(number[i]);
      }
      
      let sumAsString = String(sum);
      let special = false ;

      for(let i = 0; i < sumAsString.length; i++){
            if(sumAsString[i] === '9'){
                special = true;
            }
      }
      console.log(`${number} Amazing? ${special? 'True' : 'False'}`);
}
amazingNumber(1233);
amazingNumber(999);