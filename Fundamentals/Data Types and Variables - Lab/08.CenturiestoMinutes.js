function centuriesToMinutes(centuries){
   
    const year = centuries * 100;
    const days = Math.trunc(year * 365.24217 );
    const hours = days * 24;
    const minutes = hours * 60;

    console.log(`${centuries} centuries = ${year} years = ${days} days = ${hours} hours = ${minutes} minutes`)


}
centuriesToMinutes(1);