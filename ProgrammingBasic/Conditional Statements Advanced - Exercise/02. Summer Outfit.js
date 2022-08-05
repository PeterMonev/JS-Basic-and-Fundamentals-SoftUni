function summerOutfit(input) {
  const degrees = Number(input[0]);
  const timeOfDay = input[1];
  let Shoes
  let Outfit 

  if (10 <= degrees && degrees <= 18){
      if (timeOfDay === "Morning") {
          Shoes = "Sneakers";
          Outfit = "Sweatshirt";
      } else if (timeOfDay === "Afternoon"){
          Shoes = "Moccasins";
          Outfit = "Shirt";
      } else if (timeOfDay === "Evening"){
        Shoes = "Moccasins";
        Outfit = "Shirt";
      } 
  } else if (18 < degrees && degrees <= 24){
    if (timeOfDay === "Morning") {
       Shoes = "Moccasins";
       Outfit = "Shirt";
   } else if (timeOfDay === "Afternoon"){
       Shoes = "Sandals";
       Outfit = "T-Shirt";
   } else if (timeOfDay === "Evening"){
     Shoes = "Moccasins";
     Outfit = "Shirt" }
  }  else if (degrees >= 25){
    if (timeOfDay === "Morning") {
       Shoes = "Sandals";
       Outfit = "T-Shirt";
   } else if (timeOfDay === "Afternoon"){
       Shoes = "Barefoot";
       Outfit = "Swim Suit";
   } else if (timeOfDay === "Evening"){
     Shoes = "Moccasins";
     Outfit = "Shirt" }
  }
  
console.log(`It's ${degrees} degrees, get your ${Outfit} and ${Shoes}.`)

}
summerOutfit(["16", "Morning"]);
summerOutfit(["22", "Afternoon"]);
