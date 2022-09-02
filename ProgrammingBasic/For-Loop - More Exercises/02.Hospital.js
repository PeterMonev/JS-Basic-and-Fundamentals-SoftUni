function hospital(input){
    let period = Number(input[0]);
    let treatedPatients = 0;
    let untreatedPatients = 0;
    let doctors = 7

    for (i = 1; i <= period; i++){
      let patients = Number(input[i]);
      
     
      if (i % 3 === 0 && treatedPatients < untreatedPatients){
          doctors += 1
          if(patients <= doctors){
              treatedPatients += patients
          } else {
              untreatedPatients +=  patients - doctors;
               treatedPatients += doctors;
          }
             
      } else {
          if( patients <= doctors){
            treatedPatients += patients
          } else {
          untreatedPatients += patients - doctors;
          treatedPatients += doctors;
          } 
      }
    }
    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);

}
hospital([4,7,27,9,1])
hospital([6,25,25,25,25,25,2])
