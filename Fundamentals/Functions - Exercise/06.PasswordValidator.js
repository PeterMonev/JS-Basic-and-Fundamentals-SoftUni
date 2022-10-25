function passwordValidator(password){
    
   password = password.split('');
   let isLengthValid = true;
   let isCharValid = true;
   let isNumberdValid =true;
   let counter = 0;
   
       for (let i = 0; i < password.length; i++){
        if(password[i].charCodeAt() >= 65 && password[i].charCodeAt() <= 90 || password[i].charCodeAt() >= 97 && password[i].charCodeAt() <= 122 || password[i].charCodeAt() >= 48 && password[i].charCodeAt() <= 57){
           isCharValid = true;
        } else {
         isCharValid = false;
         break;
        }
      }

      for(let ele of password){
          if(ele >= 0){
            counter += 1;  
          }
          if(counter >= 2){
            isNumberdValid = true;
          } else {
            isNumberdValid = false;
          }
      }


      if(password.length >= 6 && password.length <= 10){
         isLengthValid = true;
      } else {
         isLengthValid = false;
      }

   if(isLengthValid && isCharValid  && isNumberdValid){
     return console.log('Password is valid');

   } 
   
   if(!isLengthValid){
      console.log('Password must be between 6 and 10 characters');
   }
   if(!isCharValid){
      console.log(`Password must consist only of letters and digits`);
   }
   if(!isNumberdValid){
      console.log(`Password must have at least 2 digits`);
   }
}

passwordValidator('Pa$s$s')
