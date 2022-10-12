function rotateArray(array){

    let arrRotation = +array.pop();
    
    for(let i=0; i< arrRotation; i++){
        let rotation = array.pop();
        array.unshift(rotation);
    }
    console.log(array.join(' '));
}
rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])