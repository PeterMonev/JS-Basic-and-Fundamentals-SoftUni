function needForSpeed(input){
    let n = input.shift();
    let objCars = {};

    for(let i = 0; i < n; i++){
      let [name, mileage, fuel] = input.shift().split('|');
      mileage = Number(mileage);
      fuel = Number(fuel);
      
      objCars[name] = {
         mileage: mileage,
          fuel: fuel,
         }
      
    }
 
    
    let tokens = input.shift().split(' : ');
   
    while(tokens[0] != 'Stop'){
        let command = tokens[0];
        let name = tokens[1];
        let values1 = +tokens[2];
        let values2 = +tokens[3];
        let cars = objCars[name]

        if(command == 'Drive'){
            if(cars.fuel - values2 < 0){
                console.log(`Not enough fuel to make that ride`);
            } else if (cars.fuel - values2 > 0){
                cars.mileage += values1;
                cars.fuel -= values2;
                console.log(`${name} driven for ${values1} kilometers. ${values2} liters of fuel consumed.`)
            }
            if(cars.mileage >= 100000){
                delete objCars[name];
                console.log(`Time to sell the ${name}!`)
            }
        } else if (command === 'Refuel'){
            if(cars.fuel <= 75 && cars.fuel >= 0){
                let refill = cars.fuel + values1;
                 if(refill <= 75){
                    cars.fuel += values1;
                    console.log(`${name} refueled with ${values1} liters`)
                 } else {
                    refill = 75 - cars.fuel;
                    cars.fuel += refill;
                    console.log(`${name} refueled with ${refill} liters`)
                 }
            }
        } else if (command === 'Revert'){
            let isTrue = true;
            if(cars.mileage > 10000){
             cars.mileage -= values1;
            
                  }
                  if(cars.mileage <= 10000){
                cars.mileage = 10000;
                isTrue = false;
             }
            if(isTrue){
                console.log(`${name} mileage decreased by ${values1} kilometers`)
            }
             
        }
 
        tokens = input.shift().split(' : ');
    }
    
    for(let line of Object.entries(objCars)){
        let name = line[0];
        let car = line[1];
        console.log(`${name} -> Mileage: ${car.mileage} kms, Fuel in the tank: ${car.fuel} lt.`)
    }


}
needForSpeed(
    [
        '4',
        'Lamborghini Veneno|11111|74',
        'Bugatti Veyron|12345|67',
        'Koenigsegg CCXR|67890|12',
        'Aston Martin Valkryie|99900|50',
        'Drive : Koenigsegg CCXR : 382 : 82',
        'Drive : Aston Martin Valkryie : 99 : 23',
        'Drive : Aston Martin Valkryie : 2 : 1',
        'Refuel : Lamborghini Veneno : 40',
        'Revert : Bugatti Veyron : 2000',
        'Stop'
      ]
      );