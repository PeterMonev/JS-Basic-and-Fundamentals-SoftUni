function rightPlace(stringmiss,char,string){
  let result = stringmiss.replace('_',char);
  let output = result === string ? 'Matched' : 'Not Matched'
  console.log(output)
}
rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String')