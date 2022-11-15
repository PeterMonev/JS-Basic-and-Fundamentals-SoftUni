function destinationMapper(input){
   let pattern = /(=|\/)(?<city>[A-Z][A-Za-z]{2,})\1/g
   let macth = pattern.exec(input);
   let cityes = [];
   let charSum = 0;

   while(macth != null){
     let token = macth[2];
     cityes.push(token)
     charSum += token.length

    macth = pattern.exec(input);
   }

   console.log(`Destinations: ${cityes.join(', ')}`);
   console.log(`Travel Points: ${charSum}`);

}
destinationMapper(["=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i="]);