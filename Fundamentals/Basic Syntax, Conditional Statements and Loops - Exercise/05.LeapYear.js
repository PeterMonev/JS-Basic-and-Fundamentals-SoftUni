function leapYear(year){
   //if(year % 2 === 0 && year % 100 !== 0 || year % 400 === 0){
   //    console.log('yes');
   //} else {
  //     console.log('no');
  // }
  let result = year % 2 === 0 && year % 100 !== 0 || year % 400 === 0 ? 'yes': 'no';
  console.log(result);


}
leapYear(1900);
leapYear(2003);
leapYear(4);
leapYear(2000)