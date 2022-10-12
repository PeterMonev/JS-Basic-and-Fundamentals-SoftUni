function addAndRemove(array){
     
    let newArr = [];
    let counter = 0;

  for(let i = 0; i < array.length  ; i++){
      counter++ 
      switch(array[i]){
          case 'add':
        newArr.push(counter);
        break;
          case 'remove':
        newArr.pop();
        break;
      }
     
  }
  if (newArr.length === 0) {
    console.log('Empty');
} else {
    console.log(newArr.join(' '));
}
}
addAndRemove(['add', 'add', 'remove', 'add', 'add']);