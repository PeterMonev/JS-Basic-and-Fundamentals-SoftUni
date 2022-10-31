function convertToObject(objectAsString){

  let obj = JSON.parse(objectAsString);

  for(let key of Object.keys(obj)){
    console.log(`${key}: ${obj[key]}`);
  }

}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');