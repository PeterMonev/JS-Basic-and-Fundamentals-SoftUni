function pascalCaseSplitter(string){
    
    let arr = string.split('');
    let text = '';
    let word = '';
    let index = arr.length - 1;

    for(let i = 0; i < arr.length; i++){

        if(arr[i] === arr[i].toUpperCase()){
            text += arr[i];
        } else if(arr[i] === arr[i].toLowerCase()){
            text += arr[i];
        }

        if(index === i){
            word += text;
            return   console.log(word);
        }

        if(arr[i + 1] === arr[i + 1].toUpperCase()){
           word += text + ', ';
           text = '';
        }
    }
  
}
pascalCaseSplitter('SplitCan')