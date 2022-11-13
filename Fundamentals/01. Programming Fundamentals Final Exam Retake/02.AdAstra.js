function adAstra(input) {
 
    let patern = /([|#])(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
    let products = [];
    let allProducts = [];
    let allCalories = 0;

    while((products = patern.exec(input)) != null){
        let name = products.groups['name'];
        let date = products.groups['date'];
        let calories = +products.groups['calories'];
        allCalories += calories;
        allProducts.push(products)
        
       

    }
  console.log(`You have food to last you for: ${Math.trunc(allCalories / 2000)} days!`);

    for(let line of allProducts){
       
      console.log(`Item: ${line[2]}, Best before: ${line[3]}, Nutrition: ${line[4]}`)
    }
}
adAstra([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
