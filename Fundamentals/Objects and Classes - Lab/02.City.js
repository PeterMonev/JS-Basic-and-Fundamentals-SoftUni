function city(city){
   
    const props = Object.keys(city);

    for(const prop of props){

        console.log(`${prop} -> ${city[prop]}`);
    }

  console.log(`name -> ${city.name}`);
  console.log(`area -> ${city.area}`);
  console.log(`population -> ${city.population}`)

}
city({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
}
)