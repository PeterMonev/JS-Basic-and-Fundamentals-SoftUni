function commonElement(arr1,arr2){
   
    for (const char1 of arr1){

        for(const char2 of arr2){
            if(char1 === char2){
                console.log(char1)
            }
        }

    }

}
commonElement(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']);
//commonElement();